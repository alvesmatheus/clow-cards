import _ from 'lodash';

export const checkMissingKeys = (object, expectedAttributes) => {
    missingKeys = _.difference(expectedAttributes, Object.keys(object));
    if (missingKeys.length > 0) {
        return `The following values were not provided: ${missingKeys.join(
            ', '
        )}.`;
    } else {
        return false;
    }
};

export const checkUndefinedValue = (value, valueLabel) => {
    if (value === undefined) {
        return `The ${valueLabel} was not provided.`;
    } else {
        return false;
    }
};
