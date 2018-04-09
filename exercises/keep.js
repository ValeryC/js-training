'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 */

const keepFirst = (string) =>{
  return string.slice(string,2,string.length)
}

const keepLast = (string) =>{
  return string.slice(-2)
}

const keepFirstLast =(string) =>{
  return string.slice(2,-2)
}

//* Begin of tests


const assert = require('assert')
assert.strictEqual(typeof keepFirst, 'function')
assert.deepStrictEqual(keepFirst( 'abcdef' ), 'ab')

assert.strictEqual(typeof keepLast, 'function')
assert.deepStrictEqual(keepLast( 'abcdef' ), 'ef')

assert.strictEqual(typeof keepFirstLast, 'function')
assert.deepStrictEqual(keepFirstLast( 'abcdef' ), 'cd')


// End of tests */
