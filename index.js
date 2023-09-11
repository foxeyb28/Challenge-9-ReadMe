// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the project",
    name: "title",
  },
  {
    type: "input",
    message: "enter a description for your project",
    name: "description",
  },
  {
    type: "input",
    message: "Installation Instructions",
    name: "installationInstructions",
  },
  {
    type: "Input",
    message: "The end user will comprise information that is frequently needed to grasp the scope of the project",
    name: "usage",
  },
  {
    type: "Input",
    message: "the user can help out by answering the questions and providing feedback",
    name: "contributing",
  },
  {
    type: "Input",
    message: "when running node you can test the code by answering the questions then run the program",
    name: "test",
  },
  {
    type: "list",
    message: "Choose your license?",
    name: "license",
    choices: ["MIT", "GPL2.0"],
  },
  {
    type: "input",
    message: "enter your github name",
    name: "github",
  },
  {
    type: "Input",
    message: "enter your email",
    name: "email",
  }
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
    // console.log("data is going to be logged below");
    // console.log("__________________");
    // console.log(data);
    // console.log("__________________");

    const markdown = generateMarkdown(data);
    writeToFile("README-GENERATED.md", markdown);
  });
}

// Function call to initialize app
init();
