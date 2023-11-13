import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="main">
    <div class="resultbox" style="background-color: white;color: black;"></div>
    <div class="buttonbox"> 
      <button class="num" id="1">1</button>
      <button class="num" id="2">2</button>
      <button class="num" id="3">3</button>
      <button class="num" id="4">4</button>
      <button class="num" id="5">5</button>
      <button class="num" id="6">6</button>
      <button class="num" id="7">7</button>
      <button class="num" id="8">8</button>
      <button class="num" id="9">9</button>
      <button class="num" id="0">0</button>
      <button class="sign" id="+">+</button>
      <button class="sign"id="-">-</button>
      <button class="sign"id="x">x</button>
      <button class="sign"id="/">/</button>
      <button id="=">=</button>
      <button id="C">C</button>
    </div>
  </div>
`
//setupCounter(document.getElementById('button'))

//console.log(document.getElementsByClassName("test"))
let input;
let result;
let box = document.getElementsByClassName("resultbox");
let numbutton = document.getElementsByClassName("num");
for (let i = 0; i < numbutton.length; i++)
{
  numbutton[i].addEventListener('click',numinput);
}
function numinput(num)
{
  console.log(num.innerHTML);
}