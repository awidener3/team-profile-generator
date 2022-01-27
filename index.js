const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { managerQuestions, engineerQuestions, internQuestions, queryQuestion } = require('./lib/questions')
const fs = require('fs');
const buildHtml = require('./src/page-template');

const team = [];

menu = () => {

    createManager = async () => {
        const response = await inquirer.prompt(managerQuestions);
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        // console.log(manager);
        team.push(manager);
        console.log(team);
        queryNext();
    }

    createEngineer = async () => {
        const response = await inquirer.prompt(engineerQuestions);
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        // console.log(engineer);
        team.push(engineer);
        console.log(team);
        queryNext();
    }

    createIntern = async () => {
        const response = await inquirer.prompt(internQuestions);
        const intern = new Intern(response.name, response.id, response.email, response.school);
        // console.log(intern);
        team.push(intern);
        console.log(team);
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
                console.log('Oops! Something went wrong!');
                break;
        }
    }

    sayGoodbye = () => {
        console.log('Goodbye!');
        fs.writeFile('./dist/index.html', buildHtml(team), (err) => {
            if (err) throw err;
        });
    }

    createManager();

}

menu();