// IMPORT code to test here
import { add } from '../utils.js';
import { subtract } from '../utils.js';
import { multiply } from '../utils.js';
import { divide } from '../utils.js';
import { area } from '..utils.js';
const test = QUnit.test;

test('add two numbers', (expect) => {
    
    const num1 = 3
    const num2 = 4
    const expected = 7;   
    const actual = add(num1, num2);

    expect.equal(actual, expected);
});

test('subtract two numbers', (expect) => {
    
    const num1 = 7
    const num2 = 4
    const expected = 3;   
    const actual = subtract(num1, num2);

    expect.equal(actual, expected);
});

test('multiply two numbers', (expect) => {
    
    const num1 = 3
    const num2 = 5
    const expected = 15;   
    const actual = multiply(num1, num2);

    expect.equal(actual, expected);
});

test('divide two numbers', (expect) => {
    
    const num1 = 10
    const num2 = 2
    const expected = 5;   
    const actual = divide(num1, num2);

    expect.equal(actual, expected);
});

test('calculate area', (expect) => {
    
    const num1 = 6
    const num2 = 3
    const expected = 9;   
    const actual = multiply(num1, num2);

    expect.equal(actual, expected);
});