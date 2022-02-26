const inquirer = require('inquirer');
const generatePage = require('./src/generateHTML');

employeeArr = []

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
            type: "confirm",
            name: "confirmAddEmployee",
            message: "Would you like to add an employee?",
            default: true
        }
    ])
    .then(managerData => {
        employeeArr.push(managerData)
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
            choices: ["Engineer", "Intern"],
            when: ({confirmAddEmployee}) => {
                if(!confirmAddEmployee) {
                    return true
                } else {
                    return false;
                }
            }
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
            message: "Please enter the employee's ID number!",
            validate: idInput => {
                if(isNaN(idInput)) {
                    console.log("Please enter the employee's ID number!")
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
            when: ({ role }) => {
                if(role === "Engineer") {
                    return true;
                } else {
                    return false;
                }
            },
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
            when: ({ role }) => {
                if(role === "Intern") {
                    return true;
                } else {
                    return false;
                }
            },
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
        // let employees;

        employeeArr.push(employeeData);

        if(employeeData.confirmAddEmployee) {
            return addEmployee(employeeArr)
        } else {
            console.log(employeeArr);
            // console.log(manArr)
        }
    })
}

managerQuestions()
    .then(addEmployee)