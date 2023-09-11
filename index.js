// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "ReadMe Generate",
    name: "title",
  },
  {
    type: "input",
    message: "this will create a professional readme",
    name: "description",
  },
  {
    type: "input",
    message: "process npm i, run node index.js, then answer questions",
    name: "installationInstructions",
  },
  {
    type: "Input",
    message: "",
    name: "usage",
  },
  {
    type: "Input",
    message: "Charlie, Bobbi and Jacob",
    name: "contributing",
  },
  {
    type: "Input",
    message: "not set up",
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
    message: "challenge-9ReadMe",
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
