const reverseString = function (input) {
  let splitInput = input.split("");
  reverseInput = splitInput.reverse();
  return reverseInput.join("");
};

// Do not edit below this line
module.exports = reverseString;
