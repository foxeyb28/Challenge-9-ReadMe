// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project",
    name: "title",
  },
  {
    type: "input",
    message: "tell me about your project",
    name: "description",
  },
  {
    type: "input",
    message: "how do you run this project",
    name: "installationInstructions",
  },
  {
    type: "Input",
    message: "what is this used for",
    name: "usage",
  },
  {
    type: "Input",
    message: "Who are the other contributing developers",
    name: "contributing",
  },
  {
    type: "Input",
    message: "are there any test to run",
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
    message: "what is the github name for this project",
    name: "github",
  },
  {
    type: "Input",
    message: "enter your email",
    name: "email",
  },
  {
    type: "Input",
    message: "are there any questions?",
    name: "questions",
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
