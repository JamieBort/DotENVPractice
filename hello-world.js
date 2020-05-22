const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
require('dotenv').config();
console.log(process.env); // The contents of the .env file.

// const hello_world = "Hello World!";
const hello_world = process.env.HELLO_WORLD; // HELLO_WORLD is coming from the .env file.

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
res.end(hello_world);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});