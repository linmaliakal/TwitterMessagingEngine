function testTweet(){;
  var tweet = new Object(), txt = document.getElementById("field1");
  var tweetLength = txt.value.length;
  if (tweetLength > 280){
    document.getElementById("validity").innerHTML = "This is not a valid tweet";
    document.getElementById("length").innerHTML = txt.value.length;
  }
  if (tweetLength == 0){
    document.getElementById("validity").innerHTML = "This is not a valid tweet";
  }
    else {
      parseTweet(txt);
  }
}
function parseTweet(txt){
  document.getElementById("validity").innerHTML = "This is a valid tweet";
  var tweetStrings = txt.value.split(" ");
//  document.getElementById("numStrings").innerHTML = tweetStrings.value.length;
//  document.getElementById("urls").innerHTML = n;
//  var arrayLength = tweetStrings.length;
//  document.getElementById("urls").innerHtml = urlsArray.length;
var testTweet;
var urlCount = 0;
var mentionCount = 0;
var topicCount = 0;
var  urls =[], mentions = [], topics =[];
for(var i = 0; i <tweetStrings.length; i++){
  testTweet = tweetStrings[i];
  console.log(/^@/.test(testTweet));
  if (/^http/.test(testTweet)){
      urlCount++;
      urls.push(testTweet);
  }
  else if(/^#/.test(testTweet)){
      topicCount++;
      topics.push(testTweet);

  }
  else if (/^@/.test(testTweet)){
    mentionCount++;
    mentions.push(testTweet);
  }
}
document.getElementById("mentions").innerHTML = "This is the number of mentions " + mentionCount; //+ ". They are " + mentions;
document.getElementById("topics").innerHTML = "This is the number of topics " + topicCount;//+ ". They are " + topics;
document.getElementById("urls").innerHTML = "This is the number of urls " + urlCount;// + ". They are " + urls;
document.getElementById("numStrings").innerHTML = "This is the number of strings " + tweetStrings.length;
}
