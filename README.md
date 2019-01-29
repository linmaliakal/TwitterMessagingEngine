# TwitterMessagingEngine
Initial project for 330 Software Engineering class in which a set of classes process Twitter-like messages. Unit tests are included as well. <br/>
We decided on using JavaScript to develop this API to take on a new challenge for the both of us. Both of us had familiarity in designing websites and writing with the basics of JS so we thought it would be interesting to try using this language instead of Java which we both have used in the past. The link in the repo takes you to the page we designed to run the JS file and see the tweet bot in action!
## Details
Developing a set of classes to process Twitter-like messages and writing unit tests to show that the code works.<br/>
Tweet Guidelines:  
* no more than 280 characters
* "#" can have any alphanumeric characters after it
* "#" cannot have "#" after it, otherwise it will not be recognized as a "tagged" element
  * ex. if ##hello is tweeted, Twitter would only register the second # and the "hello" following it as a part of the tag
* blank spaces separate tags
* "#" cannot have "@" as a part of its tag since @ is used to mention persons or other accounts
* "@" and "#" are the only metacharacters that have special meanings to them
## Requirements
see [Criteria](https://docs.google.com/document/d/1I4g5lZB9rRM5q93as7Ynqs2IjXRQoCdck9F4vUJJEkQ/edit)
