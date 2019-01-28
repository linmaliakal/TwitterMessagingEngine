function getTweet(){
  var txt = document.getElementById("field1");
  parseTweet(txt);
}
function parseTweet(txt){
  var tweetStrings = txt.value.split(" ");
  var tweetLength = txt.length;
  var testTweet;
  var urlCount = 0;
  var mentionCount = 0;
  var topicCount = 0;
  var  urls =[], mentions = [], topics =[];
  if (tweetLength <= 280 && tweetLength != 0){
    document.getElementById("validity").innerHTML = "This is a valid tweet";
    document.getElementById("length").innerHTML = "The length of this text is "+ txt.value.length + " total characters";
    for(var i = 0; i <tweetStrings.length; i++){
      testTweet = tweetStrings[i];
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
  } else if (tweetLength == 0 || tweetLength > 280){
    document.getElementById("validity").innerHTML = "This is not a valid tweet";
  } else {
    document.getElementById("validity").innerHTML = "This is not a valid tweet";
    document.getElementById("length").innerHTML = "The length of this text is "+ txt.value.length +" total characters";
  }
  document.getElementById("mentions").innerHTML = "Number of mentions: " + mentionCount;
  document.getElementById("topics").innerHTML = "Number of topics: " + topicCount;
  document.getElementById("urls").innerHTML = "Number of URLs: " + urlCount;
  document.getElementById("numStrings").innerHTML = "Number of strings: " + tweetStrings.length;
}
function getOpposite(foo) {
  return !foo;
}
