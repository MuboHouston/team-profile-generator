const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer("Ashley", 1, "testing@abc.com", "githubUsername");

    expect(engineer.github).toEqual(expect.any(String));
})

// test("get engineer's github username", () => {
//     const engineer = new Engineer("Ashley", 1, "testing@abc.com", "githubUsername");

//     expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
// })

// test("get engineer's role", () => {
//     const engineer = new Engineer("Ashley", 1, "testing@abc.com", "githubUsername");

//     expect(engineer.getRole()).toEqual("Engineer");
// })