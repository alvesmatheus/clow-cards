const fs = require("fs");
const _ = require("lodash");

let rawData = fs.readFileSync("./data/readings.json");
let readings = JSON.parse(rawData);

module.exports = {
  createReading: (req, res) => {
    req.body.id = readings.length + 1;
    readings.push(req.body);

    return res.status("201").json(req.body);
  },

  deleteReading: (req, res) => {
    deletedReading = readings.splice(req.params.id - 1, 1);

    return res.status("200").json(deletedReading);
  },

  getReading: (req, res) => {
    res.status("200").json(_.filter(readings, { id: parseInt(req.params.id) }));
  },

  getReadingsList: (req, res) => {
    res.status("200").json(readings);
  },

  updateReading: (req, res) => {
    req.body.id = req.params.id;
    readings.splice(req.params.id - 1, 1, req.body);

    return res.status("200").json(req.body);
  }
};
