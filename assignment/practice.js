let marks = {
    shiva: 90,
    shivam: 9,
    ram: 15,
    mahesh: 20
}

const marksList = (marks) => {
for(let index = 0; index < Object.keys(marks).length; index++  ){
    console.log('the marks of '+ Object.keys(marks)[index] + "are" + marks[Object.keys(marks)[index]]);
}
};
marksList(marks);


for(let index in marks ) {
    console.log('the marks of ' +  marks[index])
}

for(let index of "marks" ) {
    console.log([index])
}


let i = 0;
while ( i <= 10){
    console.log(i)
    i++
}




 
 