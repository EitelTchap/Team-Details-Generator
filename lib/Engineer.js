// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

//Require Employee class
const Employee = require("./Employee");

//Engineer class extend Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github; //Github username
    }

    //Method to return Github username
    getGithub() {
        return this.github;
    }

    //Override role
    getRole() {
        return "Engineer";
    }

}

//Export the Engineer class
module.exports = Engineer;