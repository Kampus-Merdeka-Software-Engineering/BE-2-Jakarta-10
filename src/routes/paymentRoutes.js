// paymentRoutes.js
const express = require("express");
const processController = require("../controllers/processController");
const router = express.Router();
router.post("/payment", processController.Paymentt);

module.exports = router;






