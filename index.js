var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  console.log("----- starting the server");
  res.end('Hello World');
});
server.listen(8080);