const express = require("express");
const cors = require("cors");
require("dotenv").config();
// Basic starting points
const app = express();
const PORT = process.env.PORT || 3000;
// Middlewares
app.use(cors());
app.use(express.json());
// Routes
const routing = require("./Routes/index.routes");
// NOTA. También se puede poner directamente
// app.use(require("./Routes/index.routes"))
// App
app.use(routing);
// Listener
app.listen(PORT, () => {
  console.log(`Server runing on port: ${PORT}. Everything is fine`);
});
