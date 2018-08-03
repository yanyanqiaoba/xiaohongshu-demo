const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '/public')));

app.get('*', (req, res)=> {
  console.log('url is',path.join(path.dirname(__dirname), req.url));
  res.sendFile(path.join(__dirname, '/public', 'index.html'))
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=> {
  console.log(`Production Express server running at localhost: ${PORT}`);
});
