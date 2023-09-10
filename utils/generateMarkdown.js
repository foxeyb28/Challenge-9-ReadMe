// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string -call this
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.i0/badge/License-${license}-brightgreen)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string - call this
function renderLicenseLink(license) {
  if (license) {
    return `[License](https://opensource.org/licenses/${license})`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `License
    This project is licensed under the ${license} license. Click [here](https://opensourx.org/licenses/${license}); for more information`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("this is main generate markdown and here's my data");
  console.log("data is going to be logged below");
  console.log("__________________");
  console.log(data);
  console.log("__________________");
  // Use the provided data to dynamically generate the Readme content
  return `
# Title
${data.title}
console.log("this is main generate markdown and here's my data");
## Description 
${data.description}

## Table of Contents
${data.tableOfContents}

## Installation Instructions
${data.installationInstructions}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributin}

## Test
${data.test}

# Questions
${data.questions}

${renderLicenseBadge(data.LicenseBadge)}
${renderLicenseLink(data.licenseLink)}
${renderLicenseSection(data.licenseSections)}
${rendergenerateMarkdown(data)}
`;
}

export default generateMarkdown;
