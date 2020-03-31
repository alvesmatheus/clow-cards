const fs = require("fs");
const _ = require("lodash");

const { applyPagination, equalsIgnoreCase } = require("../utils");

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
    const query = {
      filter: {
        type: req.query.type,
        dateFrom: req.query.from,
        dateTo: req.query.to
      },
      page: {
        offset: req.query.offset,
        limit: req.query.limit
      }
    };

    let readingsList = readings;

    if (query.filter.type) {
      readingsList = readingsList.filter(reading =>
        equalsIgnoreCase(reading.type, query.filter.type)
      );
    }

    if (query.filter.dateFrom && query.filter.dateTo) {
      dateFrom = new Date(query.filter.dateFrom);
      dateTo = new Date(query.filter.dateTo);

      readingsList = readingsList.filter(
        reading =>
          new Date(reading.date) >= dateFrom && new Date(reading.date) <= dateTo
      );
    }

    readingsList = _.orderBy(readingsList, ["date", "id"], ["desc", "desc"]);
    readingsList = applyPagination(
      readingsList,
      query.page.offset,
      query.page.limit
    );

    return res.status("200").json(readingsList);
  },

  updateReading: (req, res) => {
    req.body.id = req.params.id;
    readings.splice(req.params.id - 1, 1, req.body);

    return res.status("200").json(req.body);
  }
};
