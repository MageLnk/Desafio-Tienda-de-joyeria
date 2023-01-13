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
const getJewelers = async ({ limit = 3, order_by = "id_ASC", page = 1 }) => {
  try {
    const [option, direction] = order_by.split("_");
    const offset = (page - 1) * limit;
    if (offset < 0) throw "La página no puede ser 0 o menor que 0";
    const formattedQuery = format(
      "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s",
      option,
      direction,
      limit,
      offset
    );
    const { rows: allDataJewelers } = await pool.query(formattedQuery);
    return allDataJewelers;
  } catch (error) {
    throw error;
  }
};

module.exports = { getJewelers };
