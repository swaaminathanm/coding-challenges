const argv = require("minimist")(process.argv.slice(2));
const checkIsNumber = require("./utilities/checkIsNumber");
const { isTextFile } = require("./utilities/isFilePath");
const logger = require("./logger");
const processNumber = require("./processNumber");
const getDictionary = require("./getDictionary");

const logEncoding = (number, encodings) => {
  encodings.forEach((encoding) => {
    logger(`${number}:${encoding}`, "info");
  });
};

const main = async () => {
  const dictionary = await getDictionary();

  argv._.forEach((noOptionArgument) => {
    if (checkIsNumber(noOptionArgument)) {
      const encodings = processNumber(noOptionArgument, dictionary);
      logEncoding(noOptionArgument, encodings);
    } else if (isTextFile(noOptionArgument)) {
      const lineReader = require("readline").createInterface({
        input: require("fs").createReadStream(noOptionArgument),
      });
      lineReader.on("line", (line) => {
        if (checkIsNumber(line)) {
          const encodings = processNumber(line, dictionary);
          logEncoding(line, encodings);
        } else {
          logger(`Invalid number ${line}`, "error");
        }
      });
    } else {
      logger(
        `Invalid argument '${noOptionArgument}'. Accepted .txt files or numbers`,
        "error"
      );
    }
  });
};

main();
