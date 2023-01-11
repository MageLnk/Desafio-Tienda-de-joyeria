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
const getJewelers = async ({ limit = 3 }) => {
  const consulta = "SELECT * FROM inventario LIMIT $1";
  const valores = [limit];
  const { rows: allDataJewelers } = await pool.query(consulta, valores);
  return allDataJewelers;
};

module.exports = { getJewelers };
