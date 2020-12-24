const errorHandler = require("./errorHandler");
const { FATAL } = require("./errorCodes");
const { argumentMissingError, generic } = require("./errorMessages");
const checkIsNumber = require("./utilities/checkIsNumber");

const getEncoding = (numberAsString, string, wordsDictionary = {}) => {
  if (!numberAsString) {
    errorHandler(FATAL, argumentMissingError("numberAsString"));
    return;
  }

  if (!string) {
    errorHandler(FATAL, argumentMissingError("string"));
    return;
  }

  if (numberAsString.length !== string.length) {
    errorHandler(FATAL, generic("number and word length should be equal"));
    return;
  }

  const numbers = numberAsString.split("");

  const postProcessEncodings = (encodings) => {
    for (let i = 0; i < encodings.length - 1; i++) {
      if (checkIsNumber(encodings[i]) && checkIsNumber(encodings[i + 1])) {
        return [];
      }
    }
    return encodings;
  };

  const traverseString = (index, string) => {
    if (index >= string.length) {
      return [];
    }

    let nextIndex = index;
    let word = "";
    const encodings = [];

    for (let i = index; i < string.length; i++) {
      const possibleWord = string.substring(index, i + 1).toLowerCase();
      if (wordsDictionary[possibleWord]) {
        word = possibleWord;
        nextIndex = i;
      }
    }

    if (!word) {
      encodings.push(numbers[index]);
    } else {
      encodings.push(word.toUpperCase());
    }

    nextIndex++;
    encodings.push(...traverseString(nextIndex, string));

    return encodings;
  };

  return postProcessEncodings(traverseString(0, string)).join("-");
};

module.exports = getEncoding;
