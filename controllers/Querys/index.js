const { Pool } = require("pg");
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
const getJewelers = async () => {
  const { rows: allDataJoyas } = await pool.query("SELECT * FROM inventario");
  return allDataJoyas;
};

module.exports = { getJewelers };
