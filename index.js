const express = require('express');
const http = require('http');
const path = require("path");
const app = express();

// Serve any static files built by React
if(process.env.PORT){
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  });
}

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(PORT);
console.log('Server started on port 5000');
