const processNumber = require("../../processNumber");
const dictionary = require("../../data/words_dictionary.json");

describe("processNumber Integration Tests", () => {
  it("should contain CALL-ME code for number 225563", () => {
    const encodings = processNumber("225563", dictionary);
    expect(encodings.includes("CALL-ME")).toBe(true);
  });

  it("should contain FLOWER code for number 225563", () => {
    const encodings = processNumber("356937", dictionary);
    expect(encodings.includes("FLOWER")).toBe(true);
  });
});
