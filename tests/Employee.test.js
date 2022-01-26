const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Instantiating', () => {
        // checks to see if there is any input for this.name
        it('when instantiating employee, it should return an object', () => {
            const employee = new Employee();
    
            expect(typeof(employee)).toBe('object');
        });
    })

    describe('Has values', () => {
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
    })

    describe('Methods', () => {
        it('getName should return employee name', () => {
            const employee = new Employee();
            employee.name = 'Bob'
            const result = 'Bob';
    
            expect(employee.getName()).toEqual(result);
        });

        it('getId should return employee ID', () => {
            const employee = new Employee();
            employee.id = '54839'
            const result = '54839';
    
            expect(employee.getId()).toEqual(result);
        });

        it('getEmail should return employee email', () => {
            const employee = new Employee();
            employee.email = 'the@bomb.com'
            const result = 'the@bomb.com';
    
            expect(employee.getEmail()).toEqual(result);
        });
        
        // checks to see if there is any input for getRole();
        it ('should have a role of Employee', () => {
            const employee = new Employee();
            const result = 'Employee';
    
            expect(employee.getRole()).toEqual(result);
        })
    })
})