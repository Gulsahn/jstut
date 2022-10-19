
const emplyeeList = [
    {
        name: 'Ram',
        id: 1,
        age: 20
    },
    {
        name: 'Sham',
        id: 2,
        age: 25
    },
    {
        name: 'Vicky',
        id: 3,
        age: 30
    },
    {
        name: 'Vishal',
        id: 4,
        age: 10
    },
    {
        name: 'Vikram',
        id: 5,
        age: 15
    }
];

var totalEmployeeElement = document.getElementById('totalEmployee');
totalEmployeeElement.innerHTML = emplyeeList.length;

var employeeNamesElement = document.getElementsByClassName('employeeNames')[0];
employeeNamesElement.innerHTML = emplyeeList.map(e => e.name);

const printEmployeeList = () => {
    var employeeDetailsElement = document.getElementById('employeeDetails');
    employeeDetailsElement.innerHTML = '';
    emplyeeList.map((emplyee, index) => {
        let emplyeeElement = document.createElement('div');

        let nameElement = document.createElement('p');
        nameElement.innerHTML = `Name: ${emplyee.name}`;
        emplyeeElement.appendChild(nameElement);

        let ageElement = document.createElement('p');
        ageElement.innerHTML = `Age: ${emplyee.age}`;
        emplyeeElement.appendChild(ageElement);

        let seperatorElement = document.createElement('p');
        seperatorElement.innerHTML = '-------------------------------------------------------';
        emplyeeElement.appendChild(seperatorElement);

        employeeDetailsElement.appendChild(emplyeeElement);
    });
}

printEmployeeList();

const filterByName = () => {
    let name = document.getElementById('name').value;
    if (name) {
        let employeeDetails = emplyeeList.find((e) => e.name.toLowerCase() === name.toLowerCase());
        employeeDetails ? alert(JSON.stringify(employeeDetails)) : alert('No Employee Found!');
        return;
    }
    alert('Please Enter some value in Text Box!');
};

const sortByAge = (type) => {
    if(type == 'asc') {
        emplyeeList.sort((next, prev) => {
            return next.age - prev.age;
        });

    } else {
        emplyeeList.sort((next, prev) => {
            return prev.age - next.age;
        });
    }   
    printEmployeeList();
};
