// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {   
            type: 'Input', 
            message: 'What is the title of the project',
            name: 'Readme Generator'
        },
        {   
            type: 'Input', 
            message: 'What is the description of the project',
            name: 'To quickly create a professional README for a new project'
        },
        {   
            type: 'Input', 
            message: 'Installation Instuctions',
            name: 'Run Node.js, answer questions,generate Readme'
        },
        {   
            type: 'Input', 
            message: 'Usage Information',
            name: 'The end user will comprise information that is frequently needed to grasp the scope of the project '
        },
        {   
            type: 'Input', 
            message: 'Contributions Guidelines',
            name: 'the user can help out by answering the questions and providing feedback'
        },
        {   
            type: 'Input', 
            message: 'Test',
            name: 'when running node you can test the code by answering the questions then run the program'
        },
        {
            type: 'list',
            message: 'What is your license?',
            name: 'license',
            choices: ["MIT", "GPG2.0","NONE"]
          },
          {
            type: 'input',
            name: 'github',
            message: 'Foxeyb28',
          },
          {   
            type: 'Input', 
            message: 'email',
            name: 'provide your email'
        },
    ]
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> {
        if (err) {
            console.error(err);
        } else {
            console.log('README .md file has been genetated!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then((data) => {
        const markdown = generateMarkdown(data);
        writeToFile('README.md', markdown);
    });

}

// Function call to initialize app
init();
