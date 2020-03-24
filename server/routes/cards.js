const express = require("express");
const router = express.Router();
const { getCard, getAllCards } = require("../controllers/cards");

router.get("/:id(\\d+)", getCard);
router.get("/", getAllCards);

module.exports = router;
