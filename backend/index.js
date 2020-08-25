const http = require('http');
const fs = require("fs");

const hostname = '0.0.0.0';
const port = 9000;

const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(fs.readFileSync('./mock.json'));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});