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

/**
 * given a personList above, iterate the list and print the details 
//  */
const iteratePersonList = (list) => {
    for(let index = 0; index <= list.length - 1; index++) {
        console.log('Your name is: '+ list[index].name);
        console.log('Your age is: '+ list[index].age);
        console.log('\n');
    }
};
iteratePersonList(personList);

/**
 * given a personList above, print person name, who have age more than 30 ////
//  */
const printPersonName = (personList) => {
    for(let index = 1; index <= personList.length - 1; index++) {
        console.log('Your name is: '+ personList[index].name);
  
    }
};
printPersonName(personList);
/**
 * give a personList above, print the total age of all the persons ////
//  */
const sumTotalAge = (personList) => {
    let sum = 0;
    for(let index = 0; index <= personList.length - 1 ; index++  ) {
        sum  = sum + personList[index].age;
        //sum += personList[index].age;
    }
    return sum;
};  
let result = sumTotalAge(personList);
console.log(result);
// /**
//  * give a personList above, print the person name, who have age more than 30 and below or equal to 40 ////
//  */
const personListName = (personList) => {
    for(let index = 0; index < personList.length; index++) {
        if( personList[index].age > 30 && personList[index].age <= 40)
            console.log('Your name is: '+  personList[index].name);
    }
};
personListName(personList);
/**
 * give a person list, print person name who have done Engineering ////
 */

const personOfEngineerName = (personList) => {
    for( let index = 0; index <= personList.length - 1; index++ ) {
        // basic way
        if (JSON.stringify(personList[index].education).includes('Engineering')) {
            console.log(personList[index].name);
        }
    }
};
personOfEngineerName(personList);
