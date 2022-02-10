const express = require("express");
const router = express.Router();
const sigController = require("../controllers/sig-controller");

router.get("/sig-price/:id", sigController.sig_price);
router.post("/post_sig_price", sigController.post_sig_price);

module.exports = router;