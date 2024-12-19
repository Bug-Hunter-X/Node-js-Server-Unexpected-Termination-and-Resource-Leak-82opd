const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

//The error occurs when the server is unexpectedly terminated (e.g., by Ctrl+C) before the 'close' event is properly handled. This can lead to resource leaks or incomplete operations if not managed correctly.

//This is a common problem because the server might not be able to gracefully handle termination signals and might abruptly end causing resource leaks, and the issue only surfaces in production environments after a period of uptime. 
