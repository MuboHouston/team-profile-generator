module.exports = data => {
    const { name, ...header} = data

    return`
    <h2>${data}</h2>
    `
}