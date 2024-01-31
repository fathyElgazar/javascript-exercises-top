const findTheOldest = function (array) {
  return array.reduce((oldest, cPerson) => {
    let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    let currentAge = getAge(cPerson.yearOfBirth, cPerson.yearOfDeath);

    return oldestAge > currentAge ? oldest : cPerson;
  });
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
