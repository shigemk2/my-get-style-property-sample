// 該当する要素がなかったら死ぬ
var foo              =  document.querySelector('.foo');
var bar              =  document.querySelector('.bar');
var getStyleProperty =  require('get-style-property');

console.log(getStyleProperty(foo, 'min-height')); // => 20px
console.log(getStyleProperty(foo, 'max-height')); // none
console.log(getStyleProperty(bar, 'max-height')); // => 900px
