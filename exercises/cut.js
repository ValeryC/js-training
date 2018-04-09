'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 */

const cutFirst = (string) =>{
  return string.substr(0, string.length-2)
}

const cutLast = (string2) =>{
  return string2.substr(2, string2.length)
}

const cutFirstLast =(string) =>{
  return string.substr(2, string.length-4)
}

//* Begin of tests


const assert = require('assert')
assert.strictEqual(typeof cutFirst, 'function')
assert.deepStrictEqual(cutFirst( 'abcdef' ), 'abcd')

assert.strictEqual(typeof cutLast, 'function')
assert.deepStrictEqual(cutLast( 'abcdef' ), 'cdef')

assert.strictEqual(typeof cutFirstLast, 'function')
assert.deepStrictEqual(cutFirstLast( 'abcdef' ), 'cd')
// End of tests */
