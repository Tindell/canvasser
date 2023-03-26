const express = require('express');
const router = express.Router();
const fs = require('fs');
const markdown = require('markdown-it')();

// Read the banner HTML from a file
const bannerHtml = fs.readFileSync('./public/banner.html', 'utf8');

// Add the banner to the top of the rendered HTML output
const originalRender = markdown.render.bind(markdown);
markdown.render = function (md) {
  const html = originalRender(md);
  return bannerHtml + html;
};

router.get('/:filename', (req, res) => {
  console.log('req.params.filename', req.params.filename);
  const filename = req.params.filename;
  const filepath = `./chats/${filename}.md`;

  fs.readFile(filepath, 'utf8', (err, content) => {
    if (err) {

      // Handle the error
      res.status(500).send(err.message);
    } else {
      const html = markdown.render(content);
      res.send(html);
    }
  });
});

module.exports = router;
