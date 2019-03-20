const http = require('http');
const express = require('express');

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(PORT);
console.log('Server started on port 5000');
