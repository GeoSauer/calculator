// import needed modules
import { add } from './utils.js'
const addInput1 = document.getElementById('add-input-1')
const addInput2 = document.getElementById('add-input-2')
const addButton = document.getElementById('add-button')
const addResult = document.getElementById('add-result')
addButton.addEventListener('click', () => {
    console.log(addInput1, addInput2, addButton, addResult)
    const num1 = Number(addInput1.value);
    const num2 = Number(addInput2.value);
    addResult.textContent = add(num1, num2);
});

import { subtract } from './utils.js'
const subtractInput1 = document.getElementById('subtract-input-1')
const subtractInput2 = document.getElementById('subtract-input-2')
const subtractButton = document.getElementById('subtract-button')
const subtractResult = document.getElementById('subtract-result')
subtractButton.addEventListener('click', () => {
    console.log(subtractInput1, subtractInput2, subtractButton, subtractResult)
    const num1 = Number(subtractInput1.value);
    const num2 = Number(subtractInput2.value);
    subtractResult.textContent = subtract(num1, num2);
});

import { multiply } from './utils.js'
const multiplyInput1 = document.getElementById('multiply-input-1')
const multiplyInput2 = document.getElementById('multiply-input-2')
const multiplyButton = document.getElementById('multiply-button')
const multiplyResult = document.getElementById('multiply-result')
multiplyButton.addEventListener('click', () => {
    console.log(multiplyInput1, multiplyInput2, multiplyButton, multiplyResult)
    const num1 = Number(multiplyInput1.value);
    const num2 = Number(multiplyInput2.value);
    multiplyResult.textContent = multiply(num1, num2);
});

import { divide } from './utils.js'
const divideInput1 = document.getElementById('divide-input-1')
const divideInput2 = document.getElementById('divide-input-2')
const divideButton = document.getElementById('divide-button')
const divideResult = document.getElementById('divide-result')
divideButton.addEventListener('click', () => {
    console.log(divideInput1, divideInput2, divideButton, divideResult)
    const num1 = Number(divideInput1.value);
    const num2 = Number(divideInput2.value);
    divideResult.textContent = divide(num1, num2);
});

import { area } from './utils.js'
const areaInput1 = document.getElementById('area-input-1')
const areaInput2 = document.getElementById('area-input-2')
const areaButton = document.getElementById('area-button')
const areaResult = document.getElementById('area-result')
areaButton.addEventListener('click', () => {
    console.log(areaInput1, areaInput2, areaButton, areaResult)
    const num1 = Number(areaInput1.value);
    const num2 = Number(areaInput2.value);
    areaResult.textContent = area(num1, num2);
});

// event handlers - what needs to happen?
    // logic and calculations
    // update UI

