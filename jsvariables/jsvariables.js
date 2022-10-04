var name = 'Hello Glashan, am from var';
let letName = 'Hello Glashan, am from let';
const constName = 'Hello Glashan, am from const';
//constName = 'otherName';// const cannot be initilized again: run time Error
console.log(name);
console.log(letName);
console.log(constName);

//console.log(funcVarName);
//console.log(funcLetName);
//console.log(funcConstName);
const printData = () => {
    var funcVarName = 'Hello Glashan, am from function scope var';
    let funcLetName = 'Hello Glashan, am from function scope let';
    const funcConstName = 'Hello Glashan, am from function scope const';
    console.log(name);
    console.log(letName);
    console.log(constName);
    console.log(funcVarName);
    console.log(funcLetName);
    console.log(funcConstName);

    console.log(funcBlockVarName);
    //console.log(funcBlockLetName); // you cannot use let its its been declared in if block
    //console.log(funcBlockConstName); // you cannot use let its its been declared in if block

    if (true) {
        var funcBlockVarName = 'Hello Glashan, am from function Block scope var';
        let funcBlockLetName = 'Hello Glashan, am from function Block scope let';
        const funcBlockConstName = 'Hello Glashan, am from function Block scope const';
        console.log(funcBlockVarName);
        console.log(funcBlockLetName);
        console.log(funcBlockConstName);
    }
};

printData();