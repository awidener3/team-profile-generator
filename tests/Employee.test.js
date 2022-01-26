const Employee = require('../lib/Employee');

describe('Employee', () => {
    // checks to see if there is any input for this.name
    it('when instantiating employee, it should return an object', () => {
        const employee = new Employee();

        expect(typeof(employee)).toBe('object');
    });

    it('name should have a value', () => {
        const employee = new Employee();
        employee.name = 'Bob'
        const result = 'Bob';

        expect(employee.name).toEqual(result);
    });

    // checks to see if there is any input for this.id
    it('id should have a value', () => {
        const employee = new Employee();
        employee.id = 1435;
        const result = 1435;

        expect(employee.id).toEqual(result);
    });

    // checks to see if there is any input for this.email
    it('email should have a value', () => {
        const employee = new Employee();
        employee.email = 'sample@mail.com';
        const result = 'sample@mail.com';

        expect(employee.email).toEqual(result);
    });

    it('should have a name', () => {
        const employee = new Employee();
        employee.name = 'Bob'
        const result = 'Bob';

        expect(employee.getName()).toEqual(result);
    });

    // checks to see if there is any input for getRole();
    it ('should have a role of Employee', () => {
        const employee = new Employee();
        const result = 'Employee';

        expect(employee.getRole()).toEqual(result);
    })
})