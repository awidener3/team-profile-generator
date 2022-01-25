const inquirer = require('inquirer');

runInquirer = async () => {
    const response = await inquirer.prompt([
        {
            name: 'role',
            message: 'Enter employee role',
            type: 'list',
            choices: [
                'Manager',
                'Engineer',
                'Intern'
            ]
        },
        {
            name: 'name',
            message: 'Enter employee name',
            type: 'input',
            validate: (name) => { return name === '' ? 'Please enter a name' : true; }
        },
        {
            name: 'id',
            message: 'Enter employee ID',
            type: 'input',
            validate: (id) => { return isNaN(id) ? 'Please enter a number' : true; }
        },
        {
            name: 'email',
            message: 'Enter employee email',
            type: 'input',
            validate: (email) => { return (email.split('').find(char => char === '@')) ? true : 'Must be a valid email'; } // this needs to be changed
        },
        {
            name: 'officeNumber',
            message: 'Enter the manager\'s office #',
            type: 'input',
            validate: (officeNumber) => { return isNaN(officeNumber) ? 'Please enter a number' : true; },
            when: (response) => response.role === 'Manager'
        },
        {
            name: 'github',
            message: 'Enter the engineer\'s GitHub username',
            type: 'input',
            validate: (github) => { return github === '' ? 'Please enter a username' : true; },
            when: (response) => response.role === 'Engineer'
        },
        {
            name: 'school',
            message: 'Enter the intern\'s school or university',
            validate: (school) => { return school === '' ? 'Please enter a school or university name' : true; },
            when: (response) => response.role === 'Intern'

        }
    ])

    console.log(response);
}

runInquirer();