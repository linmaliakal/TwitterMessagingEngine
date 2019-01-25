//var regex = new RegExp('#(?!#)', 'g');
//var myArray = regex.exec('!#helloworld!');
var regex = /\#(?!\#)/g;
var myArray = regex.test('##helloworld!');
//document.body.innerHTML = myArray;

//var above280 = regex1.test('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus pretium turpis at facilisis. Nunc volutpat porta arcu. Vestibulum condimentum magna nec fermentum vestibulum. Sed dui eros, imperdiet ut urna sed, eleifend hendrerit odio. Sed dignissim non nibh vel congue. In metus purus, rhoncus sed elit sit amet, lacinia blandit odio. Integer mollis nulla velit, id pharetra ex aliquet sed. Curabitur ut tempor mauris. Curabitur interdum imperdiet semper. Pellentesque et congue felis, in fringilla leo. Nulla interdum sagittis quam, ac rutrum turpis. Nam faucibus lectus metus, laoreet viverra eros eleifend eget. Integer sodales ornare ante, at sagittis magna. Proin lacus lacus, convallis ut malesuada vel, rutrum malesuada diam. Mauris et lectus est. Nullam elementum dui in ex semper, et lobortis elit faucibus.');
var above280 = get.length("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus pretium turpis at facilisis. Nunc volutpat porta arcu. Vestibulum condimentum magna nec fermentum vestibulum. Sed dui eros, imperdiet ut urna sed, eleifend hendrerit odio. Sed dignissim non nibh vel congue. In metus purus, rhoncus sed elit sit amet, lacinia blandit odio. Integer mollis nulla velit, id pharetra ex aliquet sed. Curabitur ut tempor mauris. Curabitur interdum imperdiet semper. Pellentesque et congue felis, in fringilla leo. Nulla interdum sagittis quam, ac rutrum turpis. Nam faucibus lectus metus, laoreet viverra eros eleifend eget. Integer sodales ornare ante, at sagittis magna. Proin lacus lacus, convallis ut malesuada vel, rutrum malesuada diam. Mauris et lectus est. Nullam elementum dui in ex semper, et lobortis elit faucibus.");
var below280 = get.length("Lorem ipsum dolor sit amet")
Assert.IsTrue(280 > below280);
Assert.IsFalse(280 > above280);
