const express = require("express");
const app = express();
const port = 8080;
const db = require("./db/database");

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
