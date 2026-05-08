const pool = require("./pool");

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getAllUsers(retries = 10) {
  try {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
  } catch (err) {
    if (retries === 0) {
      throw err;
    }

    await wait(3000);

    return getAllUsers(retries - 1);
  }
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
