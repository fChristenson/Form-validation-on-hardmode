const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const filePath = path.resolve(__dirname, "..", "public", "index.html");
  const page = fs.readFileSync(filePath);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(page);
});

module.exports = server;
