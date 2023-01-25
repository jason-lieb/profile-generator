const Employee = require('../lib/employee.js');

describe('Employee', () => {
  it('Test get name', () => {
    const output = 'Steve';
    let employee = new Employee('Steve', 1, 'steve@email.com')
    expect(employee.getName()).toEqual(output);
  })
  it('Test get id', () => {
    const output = 1;
    let employee = new Employee('Steve', 1, 'steve@email.com')
    expect(employee.getId()).toEqual(output);
  })
  it('Test get email', () => {
    let output = 'steve@email.com';
    let employee = new Employee('Steve', 1, 'steve@email.com')
    expect(employee.getEmail()).toEqual(output);
  })
  it('Test get role', () => {
    let output = 'Employee';
    let employee = new Employee('Steve', 1, 'steve@email.com')
    expect(employee.getRole()).toEqual(output);
  })
})