const argv = require("minimist")(process.argv.slice(2));
const { isTextFile } = require("./utilities/isFilePath");
const logger = require("./logger");
const isWord = require("./utilities/matchWord");

module.exports = () => {
  const dictionaryPath = argv.d;
  if (isTextFile(dictionaryPath)) {
    return new Promise((resolve) => {
      const dictionary = {};
      const lineReader = require("readline").createInterface({
        input: require("fs").createReadStream(argv.d),
      });
      lineReader.on("line", (line) => {
        if (isWord(line)) {
          dictionary[line.toLowerCase()] = 1;
        } else {
          logger(`Invalid dictionary word ${line}`, "error");
        }
      });
      lineReader.on("close", () => {
        resolve(dictionary);
      });
    });
  } else {
    return require("./data/words_dictionary.json");
  }
};
