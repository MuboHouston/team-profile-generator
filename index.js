const generatePage = require('./src/generateHTML');

const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the manger's name!",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!")
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the manager's ID number!",
            validate: idInput => {
                if(isNaN(idInput)) {
                    console.log("Please enter the manager's ID number!")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the manger's email address!",
            validate: emailInput => {
                if(emailInput) {
                    return true
                } else {
                    console.log("Please enter the manager's email address!")
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter manger's office number!",
            validate: numberInput => {
                if(isNaN(numberInput)) {
                    console.log("Please enter manger's phone number")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "list",
            name: "next",
            message: "Would you like to add an employee or finish building team (Choose One)?",
            choices: ["Add Employee", "Done"]
        }
    ])
    .then(managerInput => {
        console.log(managerInput);

        //if statement? if done the generateHTML? else add go to addEmployee?
    })
}

const addEmployee = () => {
    console.log(`
        ==============
        Add Employee
        ==============
    `)

    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Please choose the employee's role!",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "Please enter the employee's name!",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's name!")
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the employee's ID number",
            validate: idInput => {
                if(isNaN(idInput)) {
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the employee's email address!",
            validate: emailInput => {
                if(emailInput) {
                    return true
                } else {
                    console.log("Please enter the employee's email address!")
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the engineer's GitHub username!",
            validate: githubInput => {
                if(githubInput) {
                    return true
                } else {
                    console.log("Please enter the engineer's GitHub username!")
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the name of the intern's school!",
            validate: githubInput => {
                if(githubInput) {
                    return true
                } else {
                    console.log("Please enter the name of the intern's school!")
                }
            }
        },
        {
            type: "confirm",
            name: "confirmAddEmployee",
            message: "Would you like to enter another employee?",
            default: false
        }  
    ])
    .then(employeeData => {
        if(employeeData.confirmAddEmployee) {
            return addEmployee()
        } else {
            console.log(employeeData);
        }
    })
}

managerQuestions()
    .then(addEmployee)