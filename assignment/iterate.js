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
 */
const iteratePersonList = (personList) => {
    for(let index = 0; index <= personList.length - 1; index++) {
        console.log('Your name is: '+ personList[index].name);
        console.log('Your age is: '+ personList[index].age);
        console.log('\n');
    }
};

iteratePersonList(personList);

/**
 * given a personList above, print person, who have age more than 30
 */

/**
 * give a personList above, print the total age of all the persons
 */

/**
 * give a personList above, print the person name, who have age more than 30 and below or equal to 40
 */

/**
 * give a person list, print person name who have done Engineering
 */

