const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Instantiating', () => {
        // checks to see if there is any input for this.name
        it('when instantiating manager, it should return an object', () => {
            const manager = new Manager();
    
            expect(typeof(manager)).toBe('object');
        });
    })

    describe('Has values', () => {
        it('officeNumber should have a value', () => {
            const manager = new Manager();
            manager.officeNumber = '143'
            const result = '143';
    
            expect(manager.officeNumber).toEqual(result);
        });
    })

    describe('Methods', () => {
        // checks to see if there is any input for getRole();
        it ('should have a role of Manager', () => {
            const manager = new Manager();
            const result = 'Manager';
    
            expect(manager.getRole()).toEqual(result);
        })
    })
})