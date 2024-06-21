const fs = require("fs");
const express = require("express");
const port = 4000;
const app = express();

const DataTransferItem = fs.readFileSync(
  `${__dirname}/data/data.json`,
  "utf-8"
);
const databar = JSON.parse(DataTransferItem);

app.get("/", (req, res) => {
  res.end(databar);
});

app.listen(port, () => {
  console.log(`running server, ${port}...`);
});
