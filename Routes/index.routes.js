const express = require("express");
const router = express.Router();
// Controllers
const { test } = require("../controllers/index.controllers");
// Routes
router.get("/", test);

module.exports = router;
