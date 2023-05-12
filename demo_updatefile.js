// Update Files
// The File System module has methods for updating files:

// fs.appendFile()
// fs.writeFile()
// The fs.appendFile() method appends the specified content at the end of the specified file:
var fs = require("fs");

fs.appendFile("mynewfile1.txt", " This is my text.", function (err) {
  if (err) throw err;
  console.log("Updated!");
});
var fs = require("fs");

fs.writeFile("mynewfile3.txt", "This is my text", function (err) {
  if (err) throw err;
  console.log("Replaced!");
});
