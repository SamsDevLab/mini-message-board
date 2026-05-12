const path = require("node:path");
const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

const port = process.env.PORT || 4000;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server listening on port ${port}!`);
  }
});
