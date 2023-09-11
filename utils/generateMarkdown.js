// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string -call this
function renderLicenseBadge(license) {
  if (license) {
    if (license === 'MIT') {
      return `[![License: MIT](https://img.shields.i0/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license === 'GPL2.0') {
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    }
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string - call this
function renderLicenseLink(license) {
  if (license) {
    if (license === 'MIT') {
      return `[License](https://opensource.org/licenses/MIT)`;
    } else if (license === 'GPL2.0') {
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
    }
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log("this is main generate markdown and here's my data");
  // console.log("data is going to be logged below");
  // console.log("__________________");
  // console.log(data);
  // console.log("__________________");
  // Use the provided data to dynamically generate the Readme content
  return `
# Title
${data.title}

## Description 
${data.description}

## Installation Instructions
${data.installationInstructions}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

## Contributing
${data.contributing}

## Test
${data.test}

# Questions
${data.questions}

# Email
${data.email}

# Github
{(https://github.com/foxeyb28)}

`};

// github user link example: https://github.com/foxeyb28
// 

module.exports = { generateMarkdown }
