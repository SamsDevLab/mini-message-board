const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    usernames TEXT,
    dates DATE,
    messages TEXT
);

INSERT INTO messages (usernames, dates, messages)
VALUES ('Amando', '5/7/2026', 'Hello World!');
`;

const URL = process.env.DB_URL;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `${URL}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
