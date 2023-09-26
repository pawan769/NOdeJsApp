import http from "http";
import fs from "fs";

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-Type", "text/html");
  if (req.url === "/") {
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else if (req.url === "/about") {
    res.end(
      "<h1>I am Pawan Bhandari</h1><p>I am a new developer currently learning node js.</p>"
    );
  } else if (req.url === "/contact") {
    res.end(
      "<h1>email: bhandaripawan769@gmail.com</h1><p>phNO: 9846879874</p>"
    );
  } else {
    res.statusCode = 404;
    res.end("<h1>Not Found</h1><p>Oops! Page cannot be found.</p>");
  }

  //   res.lajdlfa();
});

server.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
