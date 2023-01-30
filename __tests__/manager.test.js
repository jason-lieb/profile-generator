const Manager = require('../lib/manager.js');

describe('Manager', () => {
  it('Test get name', () => {
    const output = 'Steve';
    let manager = new Manager('Steve', 1, 'steve@email.com', 25)
    expect(manager.getName()).toEqual(output);
  })
  it('Test get id', () => {
    const output = 1;
    let manager = new Manager('Steve', 1, 'steve@email.com', 25)
    expect(manager.getId()).toEqual(output);
  })
  it('Test get email', () => {
    let output = 'steve@email.com';
    let manager = new Manager('Steve', 1, 'steve@email.com', 25)
    expect(manager.getEmail()).toEqual(output);
  })
  it('Test get role', () => {
    let output = 'Manager';
    let manager = new Manager('Steve', 1, 'steve@email.com', 25)
    expect(manager.getRole()).toEqual(output);
  })
  it('Test office number', () => {
    let output = 25;
    let manager = new Manager('Steve', 1, 'steve@email.com', 25)
    expect(manager.office).toEqual(output);
  })
})