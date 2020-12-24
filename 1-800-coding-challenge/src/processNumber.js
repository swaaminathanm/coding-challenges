const phoneDigitToCharactersMap = require("./data/phone_digit_to_characters_map.json");
const errorHandler = require("./errorHandler");
const { FATAL, RUNTIME } = require("./errorCodes");
const {
  argumentMissingError,
  argumentInvalidError,
} = require("./errorMessages");
const getEncoding = require("./getEncoding");
const checkIsNumber = require("./utilities/checkIsNumber");

const processNumber = (number, wordsDictionary = {}) => {
  if (!number) {
    errorHandler(FATAL, argumentMissingError("number"));
    return;
  }

  if (!checkIsNumber(number)) {
    errorHandler(RUNTIME, argumentInvalidError("number"));
    return;
  }

  if (typeof number === "number") {
    number += "";
  }

  const digits = number.split("");
  const encodings = [];

  const combinations = (index, prefix = "") => {
    if (index >= digits.length) {
      return;
    }

    const digit = digits[index];
    const characters = phoneDigitToCharactersMap[digit] || [digit];

    if (index === digits.length - 1) {
      characters.forEach((character) => {
        const encoding = getEncoding(
          number,
          prefix + character,
          wordsDictionary
        );
        encoding && encodings.push(encoding);
      });
    } else {
      characters.forEach((character) =>
        combinations(index + 1, prefix + character)
      );
    }
  };

  combinations(0);
  return [...new Set(encodings)];
};

module.exports = processNumber;
