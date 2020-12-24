module.exports = (code, message, error = {}) => {
  throw {
    code,
    message,
    error,
  };
};
