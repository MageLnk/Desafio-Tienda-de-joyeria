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

const filterJewels = async ({ precio_min, precio_max, categoria, metal }) => {
  try {
    let filters = [];
    const values = [];
    const addFilter = (option, comparator, value) => {
      values.push(value);
      const { length } = filters;

      filters.push(`${option} ${comparator} $${length + 1}`);
    };
    if (precio_max) addFilter("precio", "<=", precio_max);
    if (precio_min) addFilter("precio", ">=", precio_min);
    if (categoria) addFilter("categoria", "=", categoria);
    if (metal) addFilter("metal", "=", metal);

    let query = "SELECT * FROM inventario";

    if (filters.length > 0) {
      filters = filters.join(" AND ");
      query += ` WHERE ${filters}`;
    }

    const { rows: filteredJewels } = await pool.query(query, values);
    return filteredJewels;
  } catch (error) {
    throw error;
  }
};

module.exports = { getJewelers, filterJewels };
