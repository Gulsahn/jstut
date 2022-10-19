var personList = [{
    name: 'ravi',
    id: 1,
    age: 22,
    education: ['Diploma', 'Engineering']
}, {
    name: 'rekha',
    id: 4,
    age: 32,
    education: ['Intermediate', 'Bcom']
}, {
    name: 'geeta',
    id: 5,
    age: 40,
    education: ['Intermediate', 'Arts']
}, {
    name: 'rita',
    id: 7,
    age: 50,
    education: ['Diploma']
}];

// * given a personList above, iterate the list and print the  /////

const iteratePersonList = (personList) => {
    for(let index = 0; index <= personList.length - 1; index++) {
        console.log('Your name is:' + personList[index].name);
        console.log('Your name is:' + personList[index].age);
        console.log('Your name is:' + personList[index].id);
        console.log('Your name is:' + personList[index].education);
        
        console.log("\n");
       
    }
};
iteratePersonList(personList);

// * give a personList above, print the total age of all the persons ////

const sumTotalAge = (personList) => {
    let sum = 0;
    for( let index = 0; index <= personList.length -1; index ++){
        sum += personList[index].age;
    }
    return sum;
};
let result = sumTotalAge(personList);
console.log(result);


//  give a personList above, print the person name, who have age more than 30 and below or equal to 40 /////

const personListName = (personList) => {
    for(let index = 0; index < personList.length; index++){
     if(personList[index].age > 30 && personList[index].age <= 40)
        console.log('Your name is:'  +personList[index].name);
     }
};
personListName(personList);

// * given a personList above, print person name, who have age more than 30 ////

const printPersonName = (personList) => {
    for(let index = 0; index <= personList.length -1; index ++){
    if(personList[index].age > 30)
        console.log('Your name is:' + personList[index].name);
    }
};
printPersonName(personList);


// * give a person list, print person name who have done Engineering ////
 
const personOfEngineerName = (personList) => {
    for(let index = 0; index <= personList.length -1; index++){
        if((personList[index].education).includes('Engineering')){
            console.log('Your name is:' + personList[index].name);
        }
    }
};
personOfEngineerName(personList);