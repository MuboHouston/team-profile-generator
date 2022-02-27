const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern("Ashley", 1, "testing@abc.com", "schoolName");

    expect(intern.school).toEqual(expect.any(String));
})

test("gets intern's school name", () => {
    const intern = new Intern("Ashley", 1, "testing@abc.com", "schoolName");

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test("gets intern role", () => {
    const intern = new Intern("Ashley", 1, "testing@abc.com", "schoolName");

    expect(intern.getRole()).toEqual("Intern");
});