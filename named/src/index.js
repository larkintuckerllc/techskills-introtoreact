import generateName from 'sillyname';
import hello from './hello';
// import hello, { a, b } from './hello'; // UPDATED FOR DESTRUCTURING
import './index.css';
import icon from './icon.png';

const name = generateName();
const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const iconEl = document.getElementById('icon');
incrementEl.addEventListener('click', () => counterEl.innerHTML
  = (parseInt(counterEl.innerHTML, 10) + 1).toString());
hello();
window.console.log(name);
iconEl.src = icon;
window.console.log(hello.a);
window.console.log(hello.b);
/*
window.console.log(a); // UPDATED FOR DESTRUCTURING
window.console.log(b); // UPDATED FOR DESTRUCTURING
*/
