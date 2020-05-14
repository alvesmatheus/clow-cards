export const verifyRequestData = (data, expectedProperties) => {
    const missingData = [];
    expectedProperties.forEach((property) => {
        if (!data[property]) missingData.push(property);
    });

    return missingData.length > 0
        ? `The following values were not provided: ${missingData.join(', ')}.`
        : false;
};

export const trimObjectValues = (object) => {
    const newObject = {};
    Object.keys(object).forEach((key) => {
        newObject[key] = object[key].trim();
    });

    return newObject;
};
