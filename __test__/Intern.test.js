const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern("Ashley", 1, "testing@abc.com", "schoolName");

    expect(intern.school).toEqual(expect.any(String));
})