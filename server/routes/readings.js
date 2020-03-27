const express = require("express");
const router = express.Router();

const {
  createReading,
  deleteReading,
  getReading,
  getReadingsList,
  updateReading
} = require("../controllers/readings");

router.get("/:id", getReading);
router.get("/", getReadingsList);

router.post("/", createReading);
router.put("/:id", updateReading);
router.delete("/:id", deleteReading);

module.exports = router;
