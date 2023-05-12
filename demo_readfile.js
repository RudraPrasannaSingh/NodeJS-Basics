//Read Files
// The fs.readFile() method is used to read files on your computer.

// Assume we have the following HTML file (located in the same folder as Node.js):
// Create a Node.js file that reads the HTML file, and return the content:
var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    fs.readFile("demofile1.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
