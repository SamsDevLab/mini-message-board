const db = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");

const validateUser = [
  body("authorName")
    .notEmpty()
    .withMessage("Name can not be empty.")
    .isAlpha()
    .withMessage("Name must only contain alphabet letters."),
  body("messageText")
    .notEmpty()
    .withMessage()
    .isAlpha()
    .withMessage("Name must only contain alphabet letters."),
];

async function getUsernames(req, res) {
  const messages = await setTimeout(db.getAllUsers(), 20000);

  res.render("index.ejs", { title: "Mini Message Board", messages: messages });
}

async function showMsgDetails(req, res) {
  const requestedId = req.params.id;
  const message = await db.getMsgDetails(requestedId);

  res.render("message-details", { message: message });
}

function renderNewMsgForm(req, res) {
  res.render("form.ejs");
}

const submitNewMsg = [
  validateUser,
  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).send("Invalid message fields");
    }
    const { authorName, messageText } = matchedData(req);
  },
];

module.exports = {
  getUsernames,
  showMsgDetails,
  renderNewMsgForm,
  submitNewMsg,
};
