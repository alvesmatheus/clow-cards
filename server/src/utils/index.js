import _ from 'lodash';

export const equalsIgnoreCase = (value1, value2) =>
    _.toLower(value1) === _.toLower(value2);

export const applyPagination = (array, start, perPage) => {
    const offset = start ? parseInt(start, 10) : 0;
    const limit = perPage ? parseInt(perPage, 10) : 20;

    return _.slice(array, offset, offset + limit);
};
