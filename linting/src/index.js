var generateName = require('sillyname');
var hello = require('./hello');
require('./index.css');
var icon = require('./icon.png');

var name = generateName();
var counterEl = document.getElementById('counter');
var incrementEl = document.getElementById('increment');
var iconEl = document.getElementById('icon');
incrementEl.addEventListener('click', function() {
  counterEl.innerHTML = (parseInt(counterEl.innerHTML, 10) + 1).toString();
});
hello();
window.console.log(name);
iconEl.src = icon;
// vr test = 'broken'; // COMPILE TIME ERROR
/*
var test = {
  something: 'wow'
};
console.log(testi.somethingi); // RUN TIME ERROR
*/
