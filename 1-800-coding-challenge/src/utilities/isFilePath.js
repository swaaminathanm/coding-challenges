module.exports = {
  isTextFile: (arg) => /^(.+)\/?(.*\.txt)$/.test(arg),
  isJSONFile: (arg) => /^(.+)\/?(.*\.json)$/.test(arg),
};
