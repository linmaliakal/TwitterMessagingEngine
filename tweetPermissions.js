function tLength(){;
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
  document.getElementById("length").innerHTML = "Length of tweet: " + tweetLength;
}
function parseTweet(txt){
  document.getElementById("validity").innerHTML = "This is a valid tweet";
  var tweetStrings = txt.value.split(" ");
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
  document.getElementById("mentions").innerHTML = "Number of mentions: " + mentionCount;
  document.getElementById("topics").innerHTML = "Number of topics: " + topicCount;
  document.getElementById("urls").innerHTML = "Number of URLs: " + urlCount;
  document.getElementById("numStrings").innerHTML = "Number of strings: " + tweetStrings.length;
}
