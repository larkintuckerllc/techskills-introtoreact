const generateName = require('sillyname'); // UPDATED FOR VARIABLES
const hello = require('./hello'); // UPDATED FOR VARIABLES
require('./index.css');
const icon = require('./icon.png'); // UPDATED FOR VARIABLES

const name = generateName(); // UPDATED FOR VARIABLES
const counterEl = document.getElementById('counter'); // UPDATED FOR VARIABLES
const incrementEl = document.getElementById('increment'); // UPDATED FOR VARIABLES
const iconEl = document.getElementById('icon'); // UPDATED FOR VARIABLES
incrementEl.addEventListener('click', function() {
  counterEl.innerHTML = (parseInt(counterEl.innerHTML, 10) + 1).toString();
});
hello();
window.console.log(name);
iconEl.src = icon;
// ADDED FOR VARIABLES
for (let i = 0; i <= 10; i += 1) {
  window.console.log(i);
}
