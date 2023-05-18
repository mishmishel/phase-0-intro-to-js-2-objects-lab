// Write your solution in this file!

const employee = {
    name: "Mishel",
    streetAddress: "Svetlanskaya 118"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
} 

const employee1 = updateEmployeeWithKeyAndValue(
    "Sam",
    "streetAddress",
    "11 Broadway"
)

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

destructivelyUpdateEmployeeWithKeyAndValue('Sam', 'streetAddress', '12 Broadway')

function deleteFromEmployeeByKey(employee, key, value) { 
    const newEmployee2 = {...employee};
    newEmployee2[key] = value;
    delete newEmployee2.name;
    return newEmployee2
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}

destructivelyDeleteFromEmployeeByKey(employee, streetAddress)