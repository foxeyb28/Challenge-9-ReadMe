// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license} {
  if (license){
    return `![License](https://img.shields.i0/badge/License-${license}-brightgreen)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    return `[License](https://opensource.org/licenses/${license})`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return License
    This project is licensed under the ${license} license. Click [here](https://opensourx.org/licenses/${license}); for more information
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Use the provided data to dynamically generate the Readme content
return`# ${data.title}

${renderLiceseBadge(data.license)}

 ${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
-[License](#license)
- [Contributing](#contributing)
-[Tests](#tests)
- [Questions](#questions)

`;
}

module.exports = generateMarkdown;
