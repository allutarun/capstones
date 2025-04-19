const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "books",
  password: "yourpassword", // change to your actual DB password
  port: 5432
});

module.exports = pool;
