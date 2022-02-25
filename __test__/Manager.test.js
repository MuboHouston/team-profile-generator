const Manager = require('../lib/Manager');

test('creates an intern object', () => {
    const manager = new Manager("Ashley", 1, "testing@abc.com", number)

    expect(manager.number).toEqual(expect.any(Number));
})