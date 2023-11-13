import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="main">
    <div class="resultbox" style="background-color: white>

    </div>
    <div class="buttonbox"> 
      <button id="1">1</button>
      <button id="2">2</button>
      <button id="3">3</button>
      <button id="4">4</button>
      <button id="5">5</button>
      <button id="6">6</button>
      <button id="7">7</button>
      <button id="8">8</button>
      <button id="9">9</button>
      <button id="0">0</button>
      <button id="+">+</button>
      <button id="-">-</button>
      <button id="x">x</button>
      <button id="/">/</button>
      <button id="=">=</button>
      <button id="C">C</button>
    </div>
  </div>
`
setupCounter(document.getElementById('button'))

console.log(document.getElementsByClassName("test"))
