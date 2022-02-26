generateManager = manager => {
    return `
    <div>
        <h3>${manager}</h3>
        <h2>Manger</h2>
        <p>ID: </p>
        <p>Email: </p>
        <p>Office Number: </p>
    </div>
    `
}

function generatePage(data) {

    const {Manager, employeeArr} = data;

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