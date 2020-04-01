const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Got a GET request at /users");
});

module.exports = router;
