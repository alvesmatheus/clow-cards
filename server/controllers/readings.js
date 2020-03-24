const fs = require("fs");

let rawData = fs.readFileSync("./data/readings.json");
let readings = JSON.parse(rawData);

module.exports = {
  getAllReadings: (req, res) => {
    res.status("200").json(readings);
  },

  getReading: (req, res) => {
    res
      .status("200")
      .json(readings.filter(reading => reading.id == req.params.id));
  },

  createReading: (req, res) => {
    req.body.id = readings.length + 1;
    readings.push(req.body);
    return res.status("201").json(req.body);
  }
};
