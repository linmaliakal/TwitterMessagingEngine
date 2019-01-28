//trial unit test
describe("Opposite Value", function() {
  it("Returns opposite value of given variable, using to check Jasmine running", function() {
    //arrange to test against
    let foo = false;
    //act the function
    const result = getOpposite(foo);
    //assert to check result with expected
    expect(result).toBe(true);
  });
});
describe("Length of Tweet", function() {
  it("Only allows tweets that are greater than or equal to 280 characters", function() {
    //arrange
    var charLength = 530;
    //act
    var result = charLength;
    //assert
    expect(result).toBeGreaterThan(280);
  });
});
describe("Mentions from @", function() {
  it("Recognizes any string after @ symbol to be a mention of another account/person", function() {
    //arrange
    //act
    //assert
  });
});
describe("Topics from #", function() {
  it("Recognizes any string after # to be a topic except if # follows first #", function() {
    //arrange
    //act
    //assert
  });
});
describe("URLs", function() {
  it("Finds URLs in the tweet and shows them as such", function() {
    //arrange
    //act
    //assert
  });
});
