
/**
 * write a function, which returns true/false.
 * if given value is greater than 10, returns true, else return false.
 */

const isGreaterThanTen = (givenNumber) => {
    return givenNumber >= 10 ? true : false;
};
var result = isGreaterThanTen(10);
console.log(result);

const squareRoot =(givenNumber) =>{
    return givenNumber * givenNumber;
}

console.log(squareRoot(5));

const cube =(value) =>{
    //return value * value * value;
    return Math.pow(value, 3);
}
console.log(cube(10));

//printAgain();
printData();
//printDataAgain();

function printData () {
    console.log('am getting printed');
}

const printAgain = function () {
    console.log('am getting printed again');
}

const printDataAgain = () => {
    console.log('am getting printed data again');
}
printAgain();
printDataAgain();

