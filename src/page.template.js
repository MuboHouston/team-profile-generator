generateEngineer = engineer => {
    return `
    <div>
        <h3>${engineer}</h3>
        <h2>Manger</h2>
        <p>ID: </p>
        <p>Email: </p>
        <p>Office Number: </p>
    </div>
    `
}

generatePage = (data) => {
    pageArr = [];

    for(let i = 0; i < data.length; i++) {
        const employee = data [i];
        const role = employee.getRole();

        if(role === "Engineer") {
            const displayEngineer = generateEngineer(employee)

            pageArr.push(displayEngineer)
        }
    }

    const generateTeam = generateHTML(pageArr)

    return generateTeam;
}

generateHTML = (data) => {
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