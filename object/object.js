let employee = {
    name: 'Ravi',
    id: 1,
    salary: 100,
    alias: 'Chottu'
};

console.log(Object.keys(employee));

let emp = employee;
emp.salary = 500;
console.log(employee.salary);
console.log(emp.salary);

// let newEmp = Object.assign({}, employee);
// newEmp.salary = 50;
// console.log(newEmp.salary);
// console.log(employee.salary);

// freeze, entries, length

// let freezeEmplopee = Object.freeze(employee);
// employee.salary = 200
// console.log(employee.salary);

console.log(object.entries(employee));




