const Engineer = require('../lib/engineer.js');

describe('Engineer', () => {
  it('Test get name', () => {
    const output = 'Steve';
    let engineer = new Engineer('Steve', 1, 'steve@email.com', 'engineer-github')
    expect(engineer.getName()).toEqual(output);
  })
  it('Test get id', () => {
    const output = 1;
    let engineer = new Engineer('Steve', 1, 'steve@email.com', 'engineer-github')
    expect(engineer.getId()).toEqual(output);
  })
  it('Test get email', () => {
    let output = 'steve@email.com';
    let engineer = new Engineer('Steve', 1, 'steve@email.com', 'engineer-github')
    expect(engineer.getEmail()).toEqual(output);
  })
  it('Test get role', () => {
    let output = 'Engineer';
    let engineer = new Engineer('Steve', 1, 'steve@email.com', 'engineer-github')
    expect(engineer.getRole()).toEqual(output);
  })
  it('Test get github', () => {
    let output = 'engineer-github';
    let engineer = new Engineer('Steve', 1, 'steve@email.com', 'engineer-github')
    expect(engineer.getGithub()).toEqual(output);
  })
})