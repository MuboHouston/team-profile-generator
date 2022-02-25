const Manager = require('../lib/Manager');

test('creates an intern object', () => {
    const manager = new Manager("Ashley", 1, "testing@abc.com", 555-555-5555)

    expect(manager.number).toEqual(expect.any(Number));
})