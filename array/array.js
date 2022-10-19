let numberList = [10,40,4,6,20,30];

const iterate = (list) => {
    console.log(list);
    for(let index = 0; index < list.length; index++) {
        console.log(list[index]);                           // [10,40,4,6,30]
    }

    list.forEach(element => {
        console.log(element)
    });

    // immutable, return new list
    const newList = list.map(e => e + 100);
    console.log(newList);
    console.log(list);


    let employeeList = [{
        name: 'Ravi',
        salary: 1000,
        id: 1
    }, {
        name: 'Sham',
        salary: 3000,
        id: 2
    }, {
        name: 'Amar',
        salary: 5000,
        id: 3
    }, {
        name: 'Akbar',
        salary: 100,
        id: 4
    }, {
        name: 'Kishore',
        salary: 100,
        id: 5
    }];

    let newEmployeeList = employeeList.filter((emp) => {
        return emp.salary === 3000 ? true : false;
    });
    console.log(newEmployeeList);    

    let person = employeeList.find((e) => e.salary == 100);
    console.log(person);

    let hasPerson = employeeList.some((e) => e.salary == 100);
    console.log(hasPerson);
      
    const iterator = employeeList.keys();
    for(let key of iterator) {
        console.log(key);
    }
    
    // reduce, flat, fill, incudes, join, splice, slice, push, pop, shift, unshift  //////////////////

    // let person = employeeList.pop ();
    //     console.log(employeeList); 

    // let Person = employeeList.push (10000);
    //     console.log(employeeList, Person);

    // let hasPerson = employeeList.join ("*");
    //     console.log(employeeList, hasPerson);

    // let hello = employeeList.shift ();
    //     console.log(hello,employeeList);

    // let person = employeeList.unshift (200);
    //     console.log(person, employeeList);

    // let helloJI = employeeList.splice (2,2,1000,2000);
    //     console.log(employeeList);

    // let newEmployeeList = employeeList.slice (2);
    //     console.log(newEmployeeList);
    
    // let person = employeeList.fill ("hello", 3, 5);
    //     console.log(employeeList);

    // let number = employeeList.reduce (total, number);
    //     console.log(number, employeeList);

    // let emp = employeeList.flat ();
    //     console.log(emp, flat);


}
iterate(numberList);

 