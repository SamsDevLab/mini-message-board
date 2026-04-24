const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");

app.set("view engine", "ejs");

app.use("/", indexRouter);

const port = 8080;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server listening on port ${port}!`);
  }
});
