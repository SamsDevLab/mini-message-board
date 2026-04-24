const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const port = 8080;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server listening on port ${port}!`);
  }
});
