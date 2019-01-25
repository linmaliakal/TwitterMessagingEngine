//var regex = new RegExp('#(?!#)', 'g');
//var myArray = regex.exec('!#helloworld!');
var regex = /\#(?!\#)/g;
var myArray = regex.test('##helloworld!');
document.body.innerHTML = myArray;
