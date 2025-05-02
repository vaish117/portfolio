const http = require('http');

const server = http.createServer((req, res) => {
  // Set CORS headers to allow the request from any origin
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS'); // Allow POST, GET, and OPTIONS methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow Content-Type header

  if (req.method === 'POST' && req.url === '/api/messages') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        console.log('Received message:', data.message);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'success', echo: data.message }));
      } catch (error) {
        res.writeHead(400);
        res.end('Invalid JSON');
      }
    });
  } else if (req.method === 'OPTIONS') {
    // Preflight request handling for CORS
    res.writeHead(204);  // No content
    res.end();
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
