

var employees = [];

function employeeFunction (employeeName, jobTitle, salaryPaid, statFullOrPart="Full Time") {
    this.name = employeeName
    this.title = jobTitle
    this.salary = salaryPaid
    this.status = statFullOrPart

    this.printEmployeeForm = function(){
        return "Good work."
    }
}

var newEmployee1 = new employeeFunction("Bob", "Supervisor", 60000)

var newEmployee2 = new employeeFunction("Suzanne", "Auditor", 50000)

var newEmployee3 = new employeeFunction("Seth", "Designer", 40000, "Contract")

console.log(newEmployee1)
console.log(newEmployee2)
console.log(newEmployee3)


// function employeeFunction (dollarsPerHour, hoursPerWeek="Full Time", fieldOfWork) {
//     this.salary = dollarsPerHour
//     this.schedule = hoursPerWeek
//     this.field = fieldOfWork
// }

