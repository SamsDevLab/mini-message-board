const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleString(),
    id: crypto.randomUUID(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleString(),
    id: crypto.randomUUID(),
  },
];

const express = require("express");
const indexRouter = express.Router();

indexRouter.get("/new", (req, res) => {
  res.render("form.ejs", { messages: messages });
});

indexRouter.post("/new", (req, res) => {
  const formValues = req.body;
  messages.push({
    text: formValues.messageText,
    user: formValues.authorName,
    added: new Date().toLocaleString(),
    id: crypto.randomUUID(),
  });

  res.redirect("/");
});

indexRouter.get("/message-details/:id", (req, res) => {
  const requestedId = req.params.id;

  const message = messages.find((message) => message.id === requestedId);

  res.render("message-details", { message });
});

indexRouter.get("/", (req, res) => {
  res.render("index.ejs", { title: "Mini Message Board", messages: messages });
});

module.exports = indexRouter;
