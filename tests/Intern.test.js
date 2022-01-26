const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Instantiating', () => {
        // checks to see if there is any input for this.name
        it('when instantiating intern, it should return an object', () => {
            const intern = new Intern();
    
            expect(typeof(intern)).toBe('object');
        });
    })

    describe('Has values', () => {
        it('school should have a value', () => {
            const intern = new Intern();
            intern.school = 'UCF'
            const result = 'UCF';
    
            expect(intern.school).toEqual(result);
        });
    })

    describe('Methods', () => {
        it('getSchool should return intern school', () => {
            const intern = new Intern();
            intern.school = 'UCF'
            const result = 'UCF';
    
            expect(intern.getSchool()).toEqual(result);
        });
        
        // checks to see if there is any input for getRole();
        it ('should have a role of Intern', () => {
            const intern = new Intern();
            const result = 'Intern';
    
            expect(intern.getRole()).toEqual(result);
        })
    })
})