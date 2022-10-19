const employeeList = [
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
        name: 'Vikrant',
        id: 5,
        age: 15
    }
];

const tablesearch = () => {
    let input, filter, table, tr, td, i, txtValue;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for(let i = 0; i < tr.length; i++ ){
        td = tr[i].getElementsByTagName("td")[0];
        if(td){
            txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }

        }
    }
};

const frameBody = () => {
    const body = document.getElementById('tbody');
    body.innerHTML = '';
    employeeList.map((emp) => {
        const tableRow = document.createElement('tr');
        for(key in emp) {
            //alert(emp[key]);
            const tableData = document.createElement('td');
            tableData.innerHTML = emp[key];
            tableRow.appendChild(tableData);
        }
        console.log(tableRow);
        body.appendChild(tableRow);
        return tableRow;
    });
};

frameBody();

const sortTable = (sortName, sortType) => {
    if (sortName === 'name') {
        employeeList.sort((prev, next) => {
            if(prev.name < next.name) { return -1; }
            if(prev.name > next.name) { return 1; }
            return 0;
        });
        frameBody();
    } else if (sortName === 'age') {
        employeeList.sort((prev, next) => {
            return prev.age - next.age;
        });
        frameBody();
    } else if (sortName === 'id') {
        employeeList.sort((prev, next) => {
            return prev.id - next.id;
        });
        frameBody();
    }
};

