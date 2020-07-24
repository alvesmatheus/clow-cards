const standardizeKey = (key) => {
    return `@clow-cards/${key}`;
};

export const getData = (key) => {
    const data = localStorage.getItem(standardizeKey(key));
    return data ? JSON.parse(data) : null;
};

export const storeData = (key, data) => {
    localStorage.setItem(standardizeKey(key), JSON.stringify(data));
};

export const removeData = (key) => {
    localStorage.removeItem(standardizeKey(key));
};
