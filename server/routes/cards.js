const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Got a GET request at /cards");
});

module.exports = router;
