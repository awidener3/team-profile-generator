const fs = require('fs');
const inquirer = require('inquirer');
const { listenerCount } = require('process');

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
        }
    ])

    console.log(response);
}

runInquirer();