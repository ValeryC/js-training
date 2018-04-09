'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 */
const yell = (string) =>
{
  return string.toUpperCase()
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.deepStrictEqual(yell( 'a b c' ), 'A B C')

// End of tests */
