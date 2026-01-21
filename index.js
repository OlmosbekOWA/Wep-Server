const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {

  // ===== GET =====
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <!DOCTYPE html>
      <html lang="uz">
      <head>
        <meta charset="UTF-8">
        <title>Forma</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          form {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            width: 300px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          input, button {
            width: 100%;
            padding: 10px 0;
            margin-top: 10px;
          }
          button {
            background: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <form action="/" method="POST">
          <h2>Ro‘yxatdan o‘tish</h2>
          <input type="text" name="username" placeholder="Ismingiz" required />
          <input type="email" name="email" placeholder="Email" required />
          <button type="submit">Yuborish</button>
        </form>
      </body>
      </html>
    `);
  }

  // ===== POST =====
  else if (req.method === "POST") {
    let userData = "" 
    req.on("data", (data)=>{
        userData += data.toString()
    })
    
         
    req.on("end", ()=>{
        const parsed = querystring.parse(userData);
        res.writeHead(200, {"content-type":"application/json"})
        res.end(JSON.stringify([
            {
                "success": true,
                "data": parsed
            }
        ]))
    })
    
  }
});

server.listen(3000, () => {
  console.log("Server 3000-portda ishlayapti");
});
