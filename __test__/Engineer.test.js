const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer("Ashley", 1, "testing@abc.com", "githubUsername");

    expect(engineer.github).toEqual(expect.any(String));
})