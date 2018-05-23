const express = require('express');
const auth = require('./middleware/auth');

const app = express();

app.get('*', (req, res)=> {
  console.log('url is',path.join(path.dirname(__dirname), req.url));
  res.sendFile(path.join(path.dirname(__dirname),'/xiaohongshu-demo/public' ,req.url))
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=> {
  console.log(`Production Express server running at localhost: ${PORT}`);
});
