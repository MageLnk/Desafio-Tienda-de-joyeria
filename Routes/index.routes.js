const express = require("express");
const router = express.Router();
// Controllers
const { bringAllJewelry, bringDetailJewel } = require("../controllers/index.controllers");
// Routes
router.get("/joyas", bringAllJewelry);

router.get("/joyas/filtros", bringDetailJewel);

module.exports = router;
