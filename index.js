// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown").default;

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "title",
    message: "ReadMe Generator",
    name: "What is the title of the project",
  },
  {
    type: "input",
    message: "description",
    name: "enter a description for your project",
  },
  {
    type: "input",
    message: "Installation Instuctions",
    name: "process npm i, answer the questions that populate",
  },
  // {
  //     type: 'Input',
  //     message: 'Usage Information',
  //     name: 'The end user will comprise information that is frequently needed to grasp the scope of the project '
  // },
  // {
  //     type: 'Input',
  //     message: 'Contributions Guidelines',
  //     name: 'the user can help out by answering the questions and providing feedback'
  // },
  // {
  //     type: 'Input',
  //     message: 'Test',
  //     name: 'when running node you can test the code by answering the questions then run the program'
  // },
  {
    type: "list",
    message: "license",
    name: "Choose your license?",
    choices: ["MIT", "GPG2.0", "NONE"],
  },
  {
    type: "input",
    name: "github",
    message: "enter your github name",
  },
  {
    type: "Input",
    message: "email",
    name: "enter your email",
  },
];

// TODO: Create a function to write README file
function writeToFile(generateMarkdown, data) {
  fs.writeFile(generateMarkdown, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README .md file has been genetated!");
    }
  });
}
// OBJECT? STRING? ARRAY? NUMBER? BOOLEAN?
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log("data is going to be logged below");
    console.log("__________________");
    console.log(data);
    console.log("__________________");

    const markdown = generateMarkdown(data);
    writeToFile("README.md", markdown);
  });
}

// Function call to initialize app
init();
