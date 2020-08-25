const express = require("express");
const router = express.Router();
const investorsController = require("../controller/investors");

router.get("/investors", investorsController.getInvestors);

module.exports = router;
