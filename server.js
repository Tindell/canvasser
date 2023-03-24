const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Serve canvases from the first directory
app.get('/load-canvases-1', (req, res) => {
    console.log("hello");
  const scriptFolderPath = path.join(__dirname, 'scripts-1');
  readAndSendCanvasScripts(scriptFolderPath, res);
});

// Serve canvases from the second directory
app.get('/load-canvases-2', (req, res) => {
  const scriptFolderPath = path.join(__dirname, 'scripts-2');
  readAndSendCanvasScripts(scriptFolderPath, res);
});

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
