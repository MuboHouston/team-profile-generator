const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer("github");

    expect(engineer.github).toEqual(expect.any(String));
})