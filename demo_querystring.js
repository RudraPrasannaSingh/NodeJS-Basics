//Split the Query String
// There are built-in modules to easily split the query string into readable parts, such as the URL module.

var http = require("http");
var url = require("url");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-type": "text/html" });
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
  })
  .listen(8080);

//The address:
// http://localhost:8080/?year=2017&month=July
