// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    name: "name",
    message: "What is your name?"
},
{
    type: "input",
    name: "username",
    message: "What is your Github username?"
},
{
    type: "input",
    name: "projectName",
    message: "What is the name of your Project?"
},
{
    type: "list",
    name: "licenseType",
    message: "Which license will be used for this project?"
    choices: ["MIT", "Apache 2.0", "GPLv3", "BSD 3-Clause", "Creative Commons (CC0)", "LGPLv3", "AGPLv3", "Hippocratic 3.0", "WTFPL" ]
},
{
    type: "input",
    name: "description",
    message: "Please enter a brief description of your project: "
},
{
    type: "input",
    name: "installation",
    message: "What are the installation steps?"
},
{
    type: "input",
    name: "usage",
    message: "Why would you use this project?"
},
{
    type: "input",
    name: "contribution",
    message: "Who contributed to this project, besides yourself?"
}
{
    type: "input",
    name: "tests",
    message: "What testing was done on this project?"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) =>{
        console.log(responses);

    })
}

// Function call to initialize app
init();
