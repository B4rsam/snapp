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
let input = "";
let icount = 0;
let box = document.getElementsByClassName("resultbox");
let numbutton = document.getElementsByClassName("num");
let signbutton = document.getElementsByClassName("sign");
for (let i = 0; i < numbutton.length; i++)
{
  numbutton[i].addEventListener('click',numInput);
}
for (let i = 0; i < signbutton.length; i++)
{
  signbutton[i].addEventListener('click',signInput);
}

document.getElementById("=").addEventListener('click',equals());
document.getElementById("C").addEventListener('click',clear());

box.innerHTML = "0";
function numInput()
{
  console.log(this.innerHTML);
  input += this.innerHTML;
  icount++;
  console.log(input);
  box.innerHTML = input;
  console.log(box.innerHTML);
}

function signInput()
{
  console.log(this.innerHTML);
}

function equals()
{

}

function clear()
{

}