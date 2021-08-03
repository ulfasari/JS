var http = require('http');

var port = 8080;
http.createServer(function (req, res) {
	console.log("Aplikasi berjalan pada port : "+port);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Selamat Datang Di Uji Kompetensi 2020!');
}).listen(port);