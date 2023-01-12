const express = require("express");
const router = express.Router();
// Controllers
const { bringAllJewelry } = require("../controllers/index.controllers");
// Routes
router.get("/joyas", bringAllJewelry);

module.exports = router;
