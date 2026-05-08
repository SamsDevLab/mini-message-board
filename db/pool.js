const { Pool } = require("pg");
const dbUrl = process.env.DB_URL;

module.exports = new Pool({
  connectionString: `${dbUrl}`,
});
