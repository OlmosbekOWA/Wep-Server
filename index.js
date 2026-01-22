const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  // ===== GET =====
  if (req.method === "GET") {
    
    if (req.url == "/") {
      fs.readFile(
        path.join(__dirname, "template", "index.html"),
        "utf-8",
        (err, content) => {
          if (err) {
            throw new Error(err)
          }
          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          res.end(content);
        },
      );
    }else if(req.url === "/about"){
      fs.readFile(path.join(__dirname, "template", "about.html"), "utf-8", (err, content)=>{
        if(err){
          throw new Error(err)
        }
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(content);
      })

    }
    else if(req.url === "/contact"){
      fs.readFile(path.join(__dirname, "template", "contact.html"), "utf-8", (err, content)=>{
        if(err){
          throw new Error(err)
        }
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(content);
      })

    }else {
      
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("404 - Page not found");
    }
  }

  // ===== POST =====
  else if (req.method === "POST") {
    let userData = "";
    req.on("data", (data) => {
      userData += data.toString();
    });

    req.on("end", () => {
      const parsed = querystring.parse(userData);
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify([
          {
            success: true,
            data: parsed,
          },
        ]),
      );
    });
  }
});

server.listen(3000, () => {
  console.log("Server 3000-portda ishlayapti");
});
