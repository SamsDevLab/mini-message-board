const pool = require("./pool");

async function getAllUsers() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMsgDetails(msgId) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    msgId,
  ]);
  return rows[0];
}

async function addMsgToDb(msg) {
  const currentDate = new Date();
  await pool.query(
    "INSERT INTO messages (usernames, dates, messages) VALUES($1, $2, $3)",
    [msg.authorName, currentDate, msg.messageText],
  );
}

module.exports = { getAllUsers, getMsgDetails, addMsgToDb };
