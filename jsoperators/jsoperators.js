let value = 100;

// pre increment
console.log(++value);// 101
console.log(++value);// 102

// post increment
let data = 100;
console.log(data++);// 100
console.log(data);// 101

// division and modlus
value = 10;
console.log(value/3);// 3.3333333
console.log(value%3);// will give reminder

let result = 0;
for(let i = 1; i<=5; i++) {
    //result = result + i;
    result += i;
}
console.log(result);


let a = 100;
let b = 100;
console.log(a == b);
b = '100';
console.log(a == b);
console.log(a === b);// will check value with type
let status = true; // ''/0/undefined/false/null - false     [],{},1,2/-1 - true
console.log( status ? 'abc' : 'xyz');// ternary operator