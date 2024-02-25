// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

//Require Employee class
const Employee = require("./Employee");

//Engineer class extend Intern
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school; //Intern'school
    };

    //Method to return Github username
    getSchool() {
        return this.school;
    }

    //Override role
    getRole() {
        return "Intern";
    }

}

//Export the Intern class
module.exports = Intern;