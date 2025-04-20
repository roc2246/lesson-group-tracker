const express = require("express");
const app = express();
const port = 3000;

require('dotenv').config()

app.get("/", (req, res) => {
  res.send("<p>TEST</p>");
});

app.listen(port, () => {
    console.log(`Example app listening on port http://www.localhost:${port}`)
  })