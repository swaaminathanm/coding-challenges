const processNumber = require("../../processNumber");
const errorHandler = require("../../errorHandler");
const getEncoding = require("../../getEncoding");

jest.mock("../../errorHandler");
jest.mock("../../getEncoding");

describe("processNumber Tests", () => {
  const dictionary = {};

  beforeEach(() => {
    getEncoding.mockReset();
    errorHandler.mockReset();
  });

  it("should call errorHandler when number is missing", () => {
    processNumber(null);
    expect(errorHandler).toHaveBeenCalledWith(-1, "Argument number is missing");
  });

  it("should call getEncoding with all letter combinations of given number when it contains 1", () => {
    getEncoding.mockReturnValue("");

    const number = "221";
    const numberAsString = "" + number;

    processNumber(number);

    expect(getEncoding).toHaveBeenCalledTimes(9);
    expect(getEncoding).toHaveBeenNthCalledWith(
      1,
      numberAsString,
      "AA1",
      dictionary
    );
    expect(getEncoding).toHaveBeenNthCalledWith(
      2,
      numberAsString,
      "AB1",
      dictionary
    );
    expect(getEncoding).toHaveBeenNthCalledWith(
      3,
      numberAsString,
      "AC1",
      dictionary
    );
    expect(getEncoding).toHaveBeenNthCalledWith(
      4,
      numberAsString,
      "BA1",
      dictionary
    );
    expect(getEncoding).toHaveBeenNthCalledWith(
      5,
      numberAsString,
      "BB1",
      dictionary
    );
    expect(getEncoding).toHaveBeenNthCalledWith(
      6,
      numberAsString,
      "BC1",
      dictionary
    );
    expect(getEncoding).toHaveBeenNthCalledWith(
      7,
      numberAsString,
      "CA1",
      dictionary
    );
    expect(getEncoding).toHaveBeenNthCalledWith(
      8,
      numberAsString,
      "CB1",
      dictionary
    );
    expect(getEncoding).toHaveBeenNthCalledWith(
      9,
      numberAsString,
      "CC1",
      dictionary
    );
  });

  it("should call errorHandler when number type is not number", () => {
    processNumber("ABC");
    expect(errorHandler).toHaveBeenCalledWith(-2, "Invalid argument number");
  });

  it("should call getEncoding with all letter combinations of given number when it contains 0", () => {
    getEncoding.mockReturnValue("");

    const number = "201";
    const numberAsString = "" + number;

    processNumber(number);

    expect(getEncoding).toHaveBeenCalledTimes(3);
    expect(getEncoding).toHaveBeenNthCalledWith(
      1,
      numberAsString,
      "A01",
      dictionary
    );
    expect(getEncoding).toHaveBeenNthCalledWith(
      2,
      numberAsString,
      "B01",
      dictionary
    );
    expect(getEncoding).toHaveBeenNthCalledWith(
      3,
      numberAsString,
      "C01",
      dictionary
    );
  });

  it("should call getEncoding with all letter combinations of given number when it contains 2-9 inclusive", () => {
    getEncoding.mockReturnValue("");
    const number = "225563";
    processNumber(number);
    expect(getEncoding).toHaveBeenCalledTimes(729);
  });

  it("should call getEncoding when number is not string", () => {
    getEncoding.mockReturnValue("");
    const number = 201;
    processNumber(number);
    expect(getEncoding).toHaveBeenCalledTimes(3);
  });
});
