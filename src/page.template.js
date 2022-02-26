generateManager = manager => {
    return `
    <div>
        <h3>${manager.name}</h3>
        <h2>Manger</h2>
        <p>ID: ${manager.id}</p>
        <p>Email: ${manager.email}</p>
        <p>Office Number: ${manager.officeNumber} </p>
    </div>
    `
}

generateEngineer = engineer => {
    return `
    <div>
        <h3>${engineer.name}</h3>
        <h2>Engineer</h2>
        <p>ID: ${engineer.id}</p>
        <p>Email: ${engineer.email}</p>
        <p>GitHub: ${engineer.github} </p>
    </div>
    `
}

generateIntern = intern => {
    return `
    <div>
        <h3>${intern.name}</h3>
        <h2>Intern</h2>
        <p>ID: ${intern.id}</p>
        <p>Email: ${intern.email}</p>
        <p>School: ${intern.school} </p>
    </div>
    `
}

generatePage = (teamArr) => {
    // const generateTeam = generateHTML(data)

    // return generateTeam;

    data = JSON.parse(teamArr)
    
    pageArr = [];

    for(let i = 0; i < data.length; i++) {
        const employee = data [i];
        const role = employee.role;
        const manager = employee.officeNumber;

        if(manager) {
            const displayManager = generateManager(employee)

            pageArr.push(displayManager)
        }
        if(role === "Engineer") {
            const displayEngineer = generateEngineer(employee)

            pageArr.push(displayEngineer)
        }
        if(role === "Intern") {
            const displayIntern = generateIntern(employee)

            pageArr.push(displayIntern)
        }
    }

    const employCards = pageArr.join("")

    const generateTeam = generateHTML(employCards)

    return generateTeam;
}

const generateHTML = function (data) {
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manager</title>
</head>
<body>
${data}
</body>
</html>
    `
}

module.exports = generatePage;