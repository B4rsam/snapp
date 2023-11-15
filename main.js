import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="main">
    <div id="resultbox" style="background-color: white;color: black;">0</div>
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
let firstInput,secondInput,result,display = "";
let flag = 0;
firstInput = secondInput = "";

document.getElementById("=").addEventListener('click',equals);
document.getElementById("C").addEventListener('click',clear);

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
  if (flag == 0)
  {
    firstInput += this.innerHTML;
    console.log(firstInput);
    document.getElementById("resultbox").innerHTML = firstInput;
  }
  else
  {
    secondInput += this.innerHTML;
    console.log(secondInput);
    document.getElementById("resultbox").innerHTML = secondInput;
  }
}

function signInput()
{
  switch(this.innerHTML)
  {
    case "+":
      flag = 1;
      break;
    case "-":
      flag = 2;
      break;
    case "x":
      flag = 3;
      break;
    case "/":
      flag = 4;
      break;
  }
}

function equals()
{
  switch(flag)
  {
    case 0:
      break;
    case 1:
      result = parseInt(firstInput) + parseInt(secondInput);
      break;
    case 2:
      result = parseInt(firstInput) - parseInt(secondInput);
      break;
    case 3:
      result = parseInt(firstInput) * parseInt(secondInput);
      break;
    case 4:
      result = parseInt(firstInput) / parseInt(secondInput);
      break;
  }
  document.getElementById("resultbox").innerHTML = result;
  console.log(result);
  flag = 0;
}

function clear()
{
  firstInput = secondInput = "";
  flag = 0;
  console.clear();
  document.getElementById("resultbox").innerHTML = "0";
}