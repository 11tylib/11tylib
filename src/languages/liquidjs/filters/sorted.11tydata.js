const filters = require("./filters.11tydata");

module.exports = {
  filters: filters.categories
    .reduce((acc = [], cat = {}) => {
      acc.push(...cat.filters);
      return acc;
    }, [])
    .sort((a, b) => a.name.localeCompare(b.name)),
};
