// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
//Require Employee class
const Employee = require("./Employee");

//Manager class extend Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber; //Office number
    };

    //Method to return Github username
    getOfficeNumber() {
        return this.officeNumber;
    }

    //Override role
    getRole() {
        return "Manager";
    }

}

//Export the Manager class
module.exports = Manager;