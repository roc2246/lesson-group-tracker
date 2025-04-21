const express = require("express");
const apiRouter = require("./routers/api.js");
const app = express();
const port = process.env.PORT || 3000;

require("dotenv").config();

app.use(express.json());

app.use("/api", apiRouter); 

app.get("/", (req, res) => {
  res.send("<p>TEST</p>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
