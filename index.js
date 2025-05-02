const http = require('http');
const server = http.createServer((req, res) => {

 if (req.method === 'GET') {
    if (req.url === '/') {
      res.end('Home Page');
    } else if (req.url === '/about') {
      res.end('About Page');
    } else {
      res.end('Page Not Found');
    }
  }
    else if (req.method === 'POST') {
    if (req.url === '/submit') {
      let body = '';

      req.on('data', chunk => {
        body += chunk;
      });

      req.on('end', () => {
        res.end('POST data received: ' + body);
      });
    } else {
      res.end('POST Route Not Found');
    }
  }

  else {
    res.end('Unsupported Method');
  }
});



server.listen(3000);
console.log('Server running at http://localhost:3000/');
