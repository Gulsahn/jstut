const GST_LIMIT = 25000; 
/**
 * check if GST required or not, limit is 25000
 */
const isGSTRequired = (emp) => {
    if (emp.salary >= GST_LIMIT) {
        return true
    }
    return false;
};

/**
 * calculate GST
 * less than 25000, no GST
 * greater than or equal to 25000 and less than 30000 GST 10%
 * greater than or equal to 30000 and less than 40000 GST 15%
 * greater than or equal to 40000 GST 40%
 * 
 * if emplyee is seniour citize 60 or above age. GST 10% only if earning is above 25000. 
 */

const calculateGST = (emp) => {
    if (emp.salary >= GST_LIMIT && (emp.age >= 60 ||  emp.salary < 30000)) {
        let result = emp.salary * 10 / 100;
        return result; 

    } else if(emp.salary >= 30000 && emp.salary < 40000) {
        let result = emp.salary * 15 / 100;
        return result;
    } else if (emp.salary >= 40000) {
        return emp.salary * 40 / 100;
    }
    return 0;
}
var employeeList = [{
    name: 'Gulshan',
    age: 32,
    salary: 42000
}, {
    name: 'Ravi',
    age: 24,
    salary: 20000
}];

console.log(calculateGST(employeeList[0]));



/**
 * check is emplyee is list is eligible to vote, age limti 18
 * input: [{ name: 'ravi', age: 20}, { name: 'ravi', age: 17}]
 * output: [{ name: 'ravi', age: 20, isEligibleToVote: true}, { name: 'ravi', age: 17, isEligibleToVote: false}]
 */

 const AGE_LIMIT = 18;

 const isAGERequired = (emp) => {
    if (emp.age >= AGE_LIMIT) {
        return true
    }
    return false;
};

const isPersonEligibleForVote = (emp) => {
    if (emp.age >= 18) {
        return true;
    }
    return false;
}

var employeeList =[{
    name: 'ravi',
    age: 20,
},{
    name: 'ravi',
    age: 17
}];

console.log(isPersonEligibleForVote(employeeList[0]));