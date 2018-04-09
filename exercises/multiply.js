'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */
// const multiply=(num1, num2)=> {
//   let numNegatives = 0;
//   if (num1 < 0) {
//     numNegatives++;
//   }
//   if (num2 < 0) {
//     numNegatives++;
//   }
//   num1 = Math.abs(num1);
//   num2 = Math.abs(num2);
//   let sum = 0;
//   for (let i = 0; i < num2; i++) {
//     sum += num1;
//   }
//   if (numNegatives === 0 || numNegatives === 2) {
//     return sum;
//   }
//   return 0 - sum;
// }




const multiply = (a, b) => {
let result = 0

if (a === 0 || b === 0){
return 0
}

if (b < 0) {
b = -b
a = -a
}

while (b > 0) {
result = result + a
b--
}
return result
}

// const multiply = (a,b) => {
// if (b > 0) {
// let mult = a
// for (let i = 1; i < b; i++) {
// mult = mult + a
// }
// return mult
// }
// else {
// let multN = a
// for (let i = 1; i > b; i--) {
// multN = multN - a
// }
// return multN
// }
// }

// Your code :

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
