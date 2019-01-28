function testTweet(){;
//  var tweet = new Object(),
  var txt = document.getElementById("field1");
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
  var  urlsFinal =[], mentionsFinal = [], topicsFinal =[];
  if (tweetLength < 280 && tweetLength != 0){
    document.getElementById("validity").innerHTML = "This is a valid tweet";
    document.getElementById("length").innerHTML = "The length of this text is "+ txt.value.length + " total characters";
    for(var i = 0; i < tweetStrings.length; i++){
    testTweet = tweetStrings[i];
      if (/http{1}/.test(testTweet)){
        urls.push(testTweet);
    }
      else if(/#{1}/.test(testTweet)){
        topics.push(testTweet);
    }
      else if (/@{1}/.test(testTweet)){
      mentions.push(testTweet);
    }
  }
  for(var a = 0; a< urls.length; a++){
    testerTweet1 = urls[a];
    if (/^http/.test(testerTweet1)){
      urlCount++;
      urlsFinal.push(testerTweet1);
    }
  }
  for(var b = 0; b< mentions.length; b++){
    testerTweet2 = mentions[b];
    if (/^@/.test(testerTweet2)){
      mentionCount++;
      mentionFinal.push(testerTweet2);
    }
  }
  for(var c = 0; c< topics.length; c++){
    testerTweet3 = topics[c];
    if (/^#/.test(testerTweet3)){
      urlCount++;
      urlsFinal.push(testerTweet);
    }
  }
} else if (tweetLength == 0 || tweetLength > 280){
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
