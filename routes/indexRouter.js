const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const express = require("express");
const indexRouter = express.Router();

indexRouter.get("/new", (req, res) => {
  res.render("form", { messages: messages });
});

indexRouter.post("/new", (req, res) => {
  const formValues = req.body;
  messages.push({
    text: formValues.messageText,
    user: formValues.authorName,
    added: new Date(),
  });

  res.redirect("/");
});

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = indexRouter;
