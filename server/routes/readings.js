const express = require("express");
const router = express.Router();
const {
  getReading,
  getAllReadings,
  createReading
} = require("../controllers/readings");

router.get("/:id", getReading);
router.get("/", getAllReadings);
router.post("/", createReading);

module.exports = router;
