const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Instantiating', () => {
        // checks to see if there is any input for this.name
        it('when instantiating engineer, it should return an object', () => {
            const engineer = new Engineer();
    
            expect(typeof(engineer)).toBe('object');
        });
    })

    describe('Has values', () => {
        it('github should have a value', () => {
            const engineer = new Engineer();
            engineer.github = 'xxbobslayerxx'
            const result = 'xxbobslayerxx';
    
            expect(engineer.github).toEqual(result);
        });
    })

    describe('Methods', () => {
        it('getGitHub should return employee github username', () => {
            const engineer = new Engineer();
            engineer.github = 'xxbobslayerxx'
            const result = 'xxbobslayerxx';
    
            expect(engineer.getGitHub()).toEqual(result);
        });
        
        // checks to see if there is any input for getRole();
        it ('should have a role of Engineer', () => {
            const engineer = new Engineer();
            const result = 'Engineer';
    
            expect(engineer.getRole()).toEqual(result);
        })
    })
})