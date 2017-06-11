var generateName = require('sillyname');
var hello = require('./hello');
require('./index.css'); // ADDED FOR CSS

var name = generateName();
var counterEl = document.getElementById('counter');
var incrementEl = document.getElementById('increment');
incrementEl.addEventListener('click', function() {
  counterEl.innerHTML = (parseInt(counterEl.innerHTML, 10) + 1).toString();
});
hello();
window.console.log(name);
