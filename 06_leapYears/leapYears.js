const leapYears = function (year) {
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 === 0) {
      console.log(year, "1");
      return true;
    }
    if (year % 100 === 0 && year % 400 !== 0) {
      console.log(year, "2");
      return false;
    }
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = leapYears;
