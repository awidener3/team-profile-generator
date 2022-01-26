const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const { managerQuestions, engineerQuestions, internQuestions, queryQuestion } = require('./questions')

menu = () => {

    createManager = async () => {
        const response = await inquirer.prompt(managerQuestions);
        console.log(response);
        queryNext();
    }

    createEngineer = async () => {
        const response = await inquirer.prompt(engineerQuestions);
        console.log(response);
        queryNext();
    }

    createIntern = async () => {
        const response = await inquirer.prompt(internQuestions);
        console.log(response);
        queryNext();
    }

    queryNext = async () => {
        const response = await inquirer.prompt(queryQuestion)
        
        switch (response.choice) {
            case 'Create an Engineer':
                createEngineer();
                break;

            case 'Create an Intern':
                createIntern();
                break;

            case 'Exit Program':
                sayGoodbye();
                break;
        
            default:
                break;
        }
    }

    sayGoodbye = () => {
        console.log('Goodbye!');
    }

    createManager();

}

menu();