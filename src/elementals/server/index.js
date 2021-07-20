const http = require('http');

const PORT = 3000;

http
  .createServer((req, res) => {
    switch (req.url) {
      case '/':
        res.write('Backend Pure Nodejs');
        break;
      case '/hello':
        res.write('<h1>Hi!</h1>');
        break;
      default:
        res.write('404');
    }
    res.end();
  })
  .listen(PORT);

console.log(`https://localhost:${PORT}`);
