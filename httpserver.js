import http from "http";

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req);
  res.statusCode = 200;
  res.setHeader("content-Type", "text/html");
  res.end(
    "<h1>I am Pawan Bhandari</h1><p>I am a new developer currently learning node js.</p>"
  );
});

server.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
