// TODO: Write code to define and export the Employee class

// Employee class definition
class Employee {
    constructor(name, id, email) {
        this.name = name;   //Name
        this.id = id;       //Id
        this.email = email; //Email
    };

    //Method to return employee's name
    getName() {
        return this.name;
    }

    //Method to return employee's ID
    getId() {
        return this.id;
    }

    //Method to return employee's email
    getEmail() {
        return this.email;
    }

    //Method to return employee's role
    getRole() {
        return "Employee";
    } 
};

//Export the Employee class
module.exports = Employee;