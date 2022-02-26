const Manager = require('../lib/Manager');

test('creates an intern object', () => {
    const manager = new Manager("Ashley", 1, "testing@abc.com", 555-555-5555);

    expect(manager.officeNumber).toEqual(expect.any(Number));
})

// test("gets manger's office number", () => {
//     const manager = new Manager("Ashley", 1, "testing@abc.com", 555-555-5555);

//     expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
// })

// test("gets manger's role", () => {
//     const manager = new Manager("Ashley", 1, "testing@abc.com", 555-555-5555);

//     expect(manager.getRole()).toEqual("Manger");
// })