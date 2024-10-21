// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'name',
    message: "what is you name?"
},
{
    type: 'input',
    name: 'title',
    message: "what is the title of your project?"
},
{
    type: 'input',
    name: 'description',
    message: "what is your description of your project?"
},
{
    type: 'input',
    name: 'table of contents',
    message: "what is your table of contents for your project?"
},
{
    type: 'input',
    name: 'installation',
    message: "what is the installation?"
},
{
    type: 'input',
    name: 'usage',
    message: "what is the usage?"
},
{
    type: 'input',
    name: 'license',
    message: "what is the license?"
},
{
    type: 'input',
    name: 'contributing',
    message: "who was contributing?"
},
{
    type: 'input',
    name: 'test',
    message: "what was your test?"
},
{
    type: 'input',
    name: 'questions',
    message: "what are your questions?"
},
// title of your project
//description
//table of contents
//installation
//usage
//license 
//contributing
//test
//questions

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data.name), (error) => {console.log(error)});
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then(answers => {
    console.log(answers);
    writeToFile("README.md", answers)
})

}

// Function call to initialize app
init();
