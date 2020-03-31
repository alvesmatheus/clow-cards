const _ = require("lodash");

module.exports = {
  equalsIgnoreCase: (value1, value2) => {
    return _.toLower(value1) === _.toLower(value2);
  },

  applyPagination: (array, start, perPage) => {
    const offset = start ? parseInt(start) : 0;
    const limit = perPage ? parseInt(perPage) : 20;

    return _.slice(array, offset, offset + limit);
  }
};
