var generateName = require('sillyname'); // ADDED FOR PACKAGE
var hello = require('./hello');

var name = generateName(); // ADDED FOR PACKAGE
var counterEl = document.getElementById('counter');
var incrementEl = document.getElementById('increment');
incrementEl.addEventListener('click', function() {
  counterEl.innerHTML = (parseInt(counterEl.innerHTML, 10) + 1).toString();
});
hello();
window.console.log(name); // ADDED FOR PACKAGE
