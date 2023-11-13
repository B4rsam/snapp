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
let numbutton = document.getElementsByClassName("num");
let signbutton = document.getElementsByClassName("sign");
let firstInput,secondInput,display = "";
firstInput = secondInput = "";

document.getElementById("=").addEventListener('click',dummy);
document.getElementById("C").addEventListener('click',dummy);

for (let i = 0; i < numbutton.length; i++)
{
  numbutton[i].addEventListener('click',numInput);
}
for (let i = 0; i < signbutton.length; i++)
{
  signbutton[i].addEventListener('click',signInput);
}

function numInput()
{
  console.clear();
  firstInput += parseInt(this.innerHTML);
  display = firstInput;
  console.log(display);
}

function signInput()
{

}

function dummy()
{
  console.log(this.innerHTML);
}