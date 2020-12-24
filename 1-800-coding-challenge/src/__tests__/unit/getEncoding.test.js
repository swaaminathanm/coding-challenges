const getEncoding = require("../../getEncoding");
const errorhandler = require("../../errorHandler");
const wordsDictionary = require("../../data/words_dictionary.json");

jest.mock("../../errorHandler");

describe("getEncoding Tests", () => {
  beforeEach(() => {
    errorhandler.mockReset();
  });

  it("should call error handler if numberAsString argument is missing", () => {
    getEncoding(null, "ABC", wordsDictionary);
    expect(errorhandler).toHaveBeenCalledWith(
      -1,
      "Argument numberAsString is missing"
    );
  });

  it("should call error handler if string argument is missing", () => {
    getEncoding("123", null, wordsDictionary);
    expect(errorhandler).toHaveBeenCalledWith(-1, "Argument string is missing");
  });

  it("should call error handler if number and string has different lengths", () => {
    getEncoding("123", "ABCD", wordsDictionary);
    expect(errorhandler).toHaveBeenCalledWith(
      -1,
      "Undefined error occurred: number and word length should be equal"
    );
  });

  it("should return empty encoding if dictionary is empty", () => {
    const result = getEncoding("225563", "CALLME", {});
    expect(result).toBe("");
  });

  it("should return valid encoding if string contains words and has only letters", () => {
    const result = getEncoding("225563", "CALLME", wordsDictionary);
    expect(result).toBe("CALL-ME");
  });

  it("should return valid empty encoding if string contains words and has 1", () => {
    const result = getEncoding("1225563", "1CALLME", wordsDictionary);
    expect(result).toBe("1-CALL-ME");
  });

  it("should return valid encoding if string contains words and has 0", () => {
    const result = getEncoding("0225563", "0CALLME", wordsDictionary);
    expect(result).toBe("0-CALL-ME");
  });

  it("should return empty encoding if string contains more than 2 numbers", () => {
    const result = getEncoding("2255613", "CALLM1E", wordsDictionary);
    expect(result).toBe("");
  });
});
