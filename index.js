const fs = require('fs');
const inquirer = require('inquirer');

runInquirer = async () => {
    const response = await inquirer.prompt([
        {
            type: 'input',
            message: 'sample message',
            name: 'sample',
        }
    ])

    console.log(response);
}

runInquirer();