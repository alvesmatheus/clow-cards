const express = require("express");
const router = express.Router();

const {
  createReading,
  deleteReading,
  getReading,
  getReadingsList,
  updateReading
} = require("../controllers/readings");

router.get("/:id(\\d+)", getReading);
router.get("/", getReadingsList);

router.post("/", createReading);
router.put("/:id(\\d+)", updateReading);
router.delete("/:id(\\d+)", deleteReading);

module.exports = router;
