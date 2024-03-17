'use strict';


console.log('----- begin -----');


/* Operating on Strings */

const w = 'potato';
const x = 'long tea';
const y = 'horse';
const z = 'jar';

// ---

const a = typeof w === typeof y;
console.assert(a === true, 'a');

const b = y + ' ' + z === 'horsejar';
console.assert(b === false, 'b');

const c = x.length < 4 || 10 < x.length;
console.assert(c === 10 < x.length, 'c');

const d = 4 < x.length || x.length < 10;
console.assert(d === x.length < 10, 'd');

const e = z[2] === y[2] && z.length < y.length;
console.assert(e === true, 'e');

const f = w.length >= 6 && w.includes('to');
console.assert(f === true, 'f');


console.log('----- end -----');