module.exports = {
  argumentMissingError: (argumentName) => `Argument ${argumentName} is missing`,
  generic: (message) => `Undefined error occurred: ${message}`,
  argumentInvalidError: (argumentName) => `Invalid argument ${argumentName}`,
};
