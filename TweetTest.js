function testTweet(){;
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
  var url = RegExp('^https://');
  var mention = RegExp('^@');
  var topic = RegExp('^#');
  var urlRec = RegExp('https://{2}');
  var mentionRec = RegExp('@{2}');
  var topicRec = RegExp('#{2}');
  var  urls =[], mentions = [], topics =[];
  var  urlsFinal =[], mentionsFinal = [], topicsFinal =[];
  if (tweetLength < 280 && tweetLength != 0){
    document.getElementById("validity").innerHTML = "This is a valid tweet";
    document.getElementById("length").innerHTML = "The length of this text is "+ txt.value.length + " total characters";
    for(var i = 0; i < tweetStrings.length; i++){
    testTweet = tweetStrings[i];
      if (url.test(testTweet)){
        urls.push(testTweet);
    }
      else if(topic.test(testTweet)){
        topics.push(testTweet);
    }
      else if (mention.test(testTweet)){
        mentions.push(testTweet);
    }
  }
  for(var a = 0; a< urls.length; a++){
    testerTweet1 = urls[a];
    if (urlRec.test(testerTweet1) == false){
      urlCount++;
      urlsFinal.push(testerTweet1);
    }
  }
  for(var b = 0; b< mentions.length; b++){
    testerTweet2 = mentions[b];
    if (mentionRec.test(testerTweet2) == false){
      mentionCount++;
      mentionsFinal.push(testerTweet2);
    }
  }
  for(var c = 0; c< topics.length; c++){
    testerTweet3 = topics[c];
    if (topicRec.test(testerTweet3) == false){
      topicCount++;
      topicsFinal.push(testerTweet3);
    }
  }
} else if (tweetLength == 0 || tweetLength > 280){
    document.getElementById("validity").innerHTML = "This is not a valid tweet";
    document.getElementById("length").innerHTML = "The length of this text is "+ txt.value.length;
  }

document.getElementById("mentions").innerHTML = "This is the number of mentions " + mentionCount; //+ ". They are " + mentions;
document.getElementById("topics").innerHTML = "This is the number of topics " + topicCount;//+ ". They are " + topics;
document.getElementById("urls").innerHTML = "This is the number of urls " + urlCount;// + ". They are " + urls;
document.getElementById("numStrings").innerHTML = "This is the number of strings " + tweetStrings.length;
}
