const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { managerQuestions, engineerQuestions, internQuestions, queryQuestion } = require('./questions')

menu = () => {

    createManager = async () => {
        const response = await inquirer.prompt(managerQuestions);
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        console.log(manager);
        queryNext();
    }

    createEngineer = async () => {
        const response = await inquirer.prompt(engineerQuestions);
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        console.log(engineer);
        queryNext();
    }

    createIntern = async () => {
        const response = await inquirer.prompt(internQuestions);
        const intern = new Intern(response.name, response.id, response.email, response.school);
        console.log(intern);
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