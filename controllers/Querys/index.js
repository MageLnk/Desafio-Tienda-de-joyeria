const { Pool } = require("pg");
const format = require("pg-format");
//
const credentials = {
  host: "localhost",
  user: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "password",
  database: "joyas",
  allowExitOnIdle: true,
};
const pool = new Pool(credentials);
// Querys
const getJewelers = async ({ limit = 3, order_by = "ASC", page = 0 }) => {
  const offset = page * limit;
  const formattedQuery = format(
    "SELECT * FROM inventario ORDER BY stock %s LIMIT %s OFFSET %s",
    order_by,
    limit,
    offset
  );
  const { rows: allDataJewelers } = await pool.query(formattedQuery);
  return allDataJewelers;
};

module.exports = { getJewelers };
