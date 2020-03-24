const fs = require("fs");

let rawData = fs.readFileSync("./data/clow-cards.json");
let clowCards = JSON.parse(rawData);

module.exports = {
  getAllCards: (req, res) => {
    res.status("200").json(clowCards);
  },

  getCard: (req, res) => {
    res
      .status("200")
      .json(clowCards.filter(clowCard => clowCard.id == req.params.id));
  }
};
