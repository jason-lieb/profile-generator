const Intern = require('../lib/intern.js');

describe('Intern', () => {
  it('Test get name', () => {
    const output = 'Steve';
    let intern = new Intern('Steve', 1, 'steve@email.com', 'school')
    expect(intern.getName()).toEqual(output);
  })
  it('Test get id', () => {
    const output = 1;
    let intern = new Intern('Steve', 1, 'steve@email.com', 'school')
    expect(intern.getId()).toEqual(output);
  })
  it('Test get email', () => {
    let output = 'steve@email.com';
    let intern = new Intern('Steve', 1, 'steve@email.com', 'school')
    expect(intern.getEmail()).toEqual(output);
  })
  it('Test get role', () => {
    let output = 'Intern';
    let intern = new Intern('Steve', 1, 'steve@email.com', 'school')
    expect(intern.getRole()).toEqual(output);
  })
  it('Test get school', () => {
    let output = 'school';
    let intern = new Intern('Steve', 1, 'steve@email.com', 'school')
    expect(intern.getSchool()).toEqual(output);
  })
})