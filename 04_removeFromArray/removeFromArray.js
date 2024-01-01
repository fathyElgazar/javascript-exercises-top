const removeFromArray = function (arr, ...elements) {
  return arr.filter((i) => !elements.includes(i));
};

// Do not edit below this line
module.exports = removeFromArray;
