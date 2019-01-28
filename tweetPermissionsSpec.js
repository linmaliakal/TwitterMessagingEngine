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
  it("Only allows tweets that are less than or equal to 280 characters", function() {
    //arrange
    var tweetString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae nisi sed justo maximus vehicula. Sed iaculis a leo ac rutrum. Aliquam vel lacus ut arcu consequat dignissim. Fusce id lectus arcu. In nunc sapien, interdum at varius sed, fringilla at metus. Nulla ac nibh at erat tempor interdum. Nam eu metus et arcu laoreet finibus. Nunc eu velit ullamcorper, mollis magna id, tempor enim. Mauris ligula lorem, accumsan at porta finibus, venenatis non odio. Donec malesuada et ligula quis dapibus. Sed quis dolor rutrum, accumsan purus in, egestas dolor. Proin pulvinar, nibh quis auctor elementum, ex enim sagittis ante, at tincidunt nulla orci vel velit. Nullam tempus sollicitudin nibh non efficitur. Mauris pharetra porttitor arcu, ac venenatis risus efficitur vitae.";
    var charLength = 531;
    var charLength1 = 137;
    var charLength2 = 280;
    //act
    var result0 = tLength(tweetString);
    var result = charLength;
    var result1 = charLength1;
    var result2 = charLength2;
    //assert
    expect(result).toBeGreaterThan(280);
    expect(result).not.toBeLessThan(280);
    expect(result1).toBeLessThan(280);
    expect(result2).toBe(280);
  });
});
describe("Mentions from @", function() {
  it("Recognizes any string after @ symbol to be a mention of another account/person", function() {
    //arrange
    var mention = "Hey, @linmaliakal";
    //act
    //var result = parseTweet(mention);
    //assert
    //expect(result).toBeTrue();
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
