const express = require("express");

const router = express.Router();

const { getCard, getCardsList } = require("../controllers/cards");

router.get("/:id(\\d+)", getCard);
router.get("/", getCardsList);

module.exports = router;
