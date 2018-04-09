'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */

const jadenCase = (string) => {

const tab = string.split(' ')
for (const m in tab){
tab[m] = tab[m].substr(0, 1).toUpperCase()+tab[m].substr(1, tab[m].length);
}
return tab.join(' ')
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('How are you'), 'How Are You')



// End of tests */
