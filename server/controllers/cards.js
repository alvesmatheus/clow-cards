const fs = require("fs");
const _ = require("lodash");

const rawData = fs.readFileSync("./data/clow-cards.json");
const clowCards = JSON.parse(rawData);

module.exports = {
  getCard: (req, res) => {
    res
      .status("200")
      .json(_.filter(clowCards, { id: parseInt(req.params.id) }));
  },

  getCardsList: (req, res) => {
    const query = {
      filter: {
        name: req.query.name,
        sign: req.query.sign,
        type: req.query.type
      },
      sort: {
        order: req.query.order,
        orderBy: req.query.orderBy
      },
      page: {
        offset: req.query.offset,
        limit: req.query.limit
      }
    };

    let cardsList = clowCards;

    const definedFilters = _.pickBy(query.filter, _.identity);
    _.forEach(definedFilters, (value, key) => {
      cardsList = cardsList.filter(
        card => _.toLower(_.get(card, key)) === _.toLower(value)
      );
    });

    const order = !query.sort.order ? "asc" : query.sort.order;
    const orderBy = !query.sort.orderBy ? "name" : query.sort.orderBy;
    cardsList = _.orderBy(cardsList, orderBy, order);

    const offset = !query.page.offset ? 0 : parseInt(query.page.offset);
    const limit = !query.page.limit ? 20 : parseInt(query.page.limit);
    cardsList = _.slice(cardsList, offset, offset + limit);

    return res.status("200").json(cardsList);
  }
};
