'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 *
 */


const whisper = (string) =>
{
  return string.toLowerCase()
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.deepStrictEqual(whisper( 'A B C' ), 'a b c')
// End of tests */
