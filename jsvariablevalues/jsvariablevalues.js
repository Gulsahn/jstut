// following arr value to variables in javascript
/**
 * 1. undefined
 * 2. null - its object type value is null
 * 3. boolean - true/false
 * 4. string - 'abcd', "abcd"
 * 5. number - 1/ 100/ 0.5
 * 6. Object = {} / { name: 'abcd' }
 * 7. array - [] / [1,2,3] / ['abcd', 'xyz']
 * 
 */

var name;
console.log(name); // undfine is default value of variable declared
console.log(typeof name);
name = 'test';
console.log(name); // this is string value assigned to name variable
console.log(typeof name);

name = null;
console.log(name); // null assigned to variable name
console.log(typeof name); // type is object type 

name = true;
console.log(name); // true assigned to variable name
console.log(typeof name); // type is boolean type 

name = 100;
console.log(name); // number 100 will be printed
console.log(typeof name); // type Number

name = 100.10;
console.log(name); // number 100.10 will be printed
console.log(typeof name); // type Number

name = {};
console.log(name); // {} will be printed
console.log(typeof name); // type Object
console.log(Array.isArray(name)); // false

name = [];
console.log(name); // [] will be printed
console.log(typeof name); // type Object
console.log(Array.isArray(name)); // print true if array, else false