const express = require('express');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const crypto = require('crypto');
const exec = require('child_process').exec;

const bodyParser = require('body-parser');
const GITHUB_WEBHOOK_SECRET = process.env.GITHUB_WEBHOOK_SECRET || "";


const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve canvases from the first directory
app.get('/load-canvases-1', (req, res) => {
  const scriptFolderPath = path.join(__dirname, 'scripts-1');
  readAndSendCanvasScripts(scriptFolderPath, res);
});

// Serve canvases from the second directory
app.get('/load-canvases-2', (req, res) => {
  const scriptFolderPath = path.join(__dirname, 'scripts-2');
  readAndSendCanvasScripts(scriptFolderPath, res);
});

app.post('/git-webhook', (req, res) => {
  updateRepo(req, res);
});

function updateRepo(req, res) {
  const payload = JSON.stringify(req.body);
  const signature = req.header('X-Hub-Signature-256');

  if (!payload || !signature) {
    res.status(400).send('Invalid request');
    return;
  }

  // Verify the payload's signature
  const hmac = crypto.createHmac('sha256', GITHUB_WEBHOOK_SECRET);
  const digest = 'sha256=' + hmac.update(payload).digest('hex');

  if (signature !== digest) {
    res.status(401).send('Unauthorized');
    return;
  }

  // Check if the event is a push event to the main branch
  const event = req.header('X-GitHub-Event');
  const ref = req.body.ref;

  if (event === 'push' && ref === 'refs/heads/main') {
    // Update the repository and restart the server
    exec('git pull && npm install && pm2 restart canvasser', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
    res.status(200).send('OK');
  } else {
    res.status(200).send('Not a push event to the main branch');
  }
};


function readAndSendCanvasScripts(scriptFolderPath, res) {
  fs.readdir(scriptFolderPath, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading script files');
      return;
    }

    const canvasData = files.map(file => {
      const scriptContent = fs.readFileSync(path.join(scriptFolderPath, file), 'utf-8');
      return {
        scriptName: file,
        scriptContent,
      };
    });

    res.json(canvasData);
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
