const express = require("express");
const indexRouter = express.Router();
const usernames = require("../controllers/messages-controller");

indexRouter.get("/new", usernames.renderNewMsgForm);
indexRouter.post("/new", usernames.submitNewMsg);
indexRouter.get("/message-details/:id", usernames.showMsgDetails);
indexRouter.get("/", usernames.getUsernames);

module.exports = indexRouter;
