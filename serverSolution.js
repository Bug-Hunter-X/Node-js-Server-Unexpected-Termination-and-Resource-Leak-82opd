const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

let isClosing = false; // Flag to track graceful shutdown

const shutdown = () => {
  if (isClosing) return; // Avoid duplicate shutdown attempts
  isClosing = true;
  console.log('Server shutting down...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0); // Exit cleanly
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
// The solution adds event listeners for 'SIGINT' and 'SIGTERM' signals, allowing the server to gracefully shut down when it receives termination signals. The isClosing flag prevents multiple shutdown attempts. The server.close() method waits for pending requests to complete before closing and freeing resources.