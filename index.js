// MODULE IMPORTS
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { managerQuestions, engineerQuestions, internQuestions, queryQuestion } = require('./lib/questions')
const buildHtml = require('./src/page-template');

// will be filled with user-input prompt responses
const team = [];

menu = () => {
    // creates an instance of the Manager class
    createManager = async () => {
        const response = await inquirer.prompt(managerQuestions);
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        // console.log(manager);
        team.push(manager);
        queryNext();
    }

    // creates an instance of the Engineer class
    createEngineer = async () => {
        const response = await inquirer.prompt(engineerQuestions);
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        // console.log(engineer);
        team.push(engineer);
        queryNext();
    }

    // creates an instance of the Intern class
    createIntern = async () => {
        const response = await inquirer.prompt(internQuestions);
        const intern = new Intern(response.name, response.id, response.email, response.school);
        // console.log(intern);
        team.push(intern);
        queryNext();
    }

    // asks the user to add another member or end the program
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
                console.log('Generating your webpage...')
                generateWebpage();
                break;
        
            default:
                console.log('Oops! Something went wrong!');
                break;
        }
    }

    // ends the program
    generateWebpage = () => {
        console.log('Generated webpage complete!');
        // writes the html file in the dist folder using the imported buildHtml() function
        fs.writeFile('./dist/index.html', buildHtml(team), (err) => {
            if (err) throw err;
        });
    }

    // initializes the program
    createManager();
}

menu();