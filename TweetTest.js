function testTweet(){;
  var tweet = new Object(), txt = document.getElementById("field1");
  parseTweet(txt);
}
function parseTweet(txt){
  var tweetStrings = txt.value.split(" ");
  var tweetLength = txt.value.length;
  var testTweet;
  var urlCount = 0;
  var mentionCount = 0;
  var topicCount = 0;
  var  urls =[], mentions = [], topics =[];
  if (tweetLength < 280 && tweetLength != 0){
    document.getElementById("validity").innerHTML = "This is a valid tweet";
    document.getElementById("length").innerHTML = "The length of this text is "+ txt.value.length + " total characters";
    for(var i = 0; i <tweetStrings.length; i++){
    testTweet = tweetStrings[i];
      if (/^http/.test(testTweet)){
        urlCount++;
        urls.push(testTweet);
    }
      else if(/^#?/.test(testTweet) && (/^#/.test(testTweet))){
        topicCount++;
        topics.push(testTweet);
    }
      else if (/^@?/.test(testTweet) && (/^@/.test(testTweet))){
      mentionCount++;
      mentions.push(testTweet);
    }
  }
  } else if (tweetLength == 0){
    document.getElementById("validity").innerHTML = "This is not a valid tweet";
  } else {
      document.getElementById("validity").innerHTML = "This is not a valid tweet";
      document.getElementById("length").innerHTML = "The length of this text is "+ txt.value.length +" total characters";
  }

document.getElementById("mentions").innerHTML = "This is the number of mentions " + mentionCount; //+ ". They are " + mentions;
document.getElementById("topics").innerHTML = "This is the number of topics " + topicCount;//+ ". They are " + topics;
document.getElementById("urls").innerHTML = "This is the number of urls " + urlCount;// + ". They are " + urls;
document.getElementById("numStrings").innerHTML = "This is the number of strings " + tweetStrings.length;
}
