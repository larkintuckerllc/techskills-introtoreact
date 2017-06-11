import generateName from 'sillyname'; // UPDATED WITH IMPORT
import hello from './hello'; // UPDATED WITH IMPORT
import './index.css'; // UPDATED WITH IMPORT
import icon from './icon.png'; // UPDATED WITH IMPORT

const name = generateName();
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const iconEl = document.getElementById('icon');
incrementEl.addEventListener('click', () => counterEl.innerHTML
  = (parseInt(counterEl.innerHTML, 10) + 1).toString());
hello();
window.console.log(name);
iconEl.src = icon;
