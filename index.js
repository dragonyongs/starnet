// index.js
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const express = require("express");
  const server = express();
  const port = 3000;

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`⚡ Server is running at http://localhost:${port}`);
  });
});
