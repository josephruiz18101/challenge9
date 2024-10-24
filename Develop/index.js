// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your name?"
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "What is your description of your project?"
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: "What is your table of contents for your project?"
    },
    {
        type: 'input',
        name: 'installation',
        message: "What is the installation?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is the usage?"
    },
    {
        type: 'input',
        name: 'license',
        message: "What is the license?"
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Who contributed to this project?"
    },
    {
        type: 'input',
        name: 'test',
        message: "What tests were performed?"
    },
    {
        type: 'input',
        name: 'questions',
        message: "What questions do you have?"
    },
    {
        type: 'input',
        name: 'Email',
        message: "What is you email?"
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    const licensesvg = `![License](${encodeURI(`https://img.shields.io/badge/license-${data.license}-blue.svg`)})`;
    
    const content = `# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
${data.questions}
<a href='mailto:${data.email}'>Josephs Email</a>
## License
${licensesvg}`;

    fs.writeFile(fileName, content, (error) => {
        if (error) {
            console.error("Error writing file:", error);
        } else {
            console.log("README.md created successfully!");
        }
    });
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        writeToFile("README.md", answers);
    });
}

// Function call to initialize app
init();

