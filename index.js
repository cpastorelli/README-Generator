// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Function call to initialize app
init();

function init() {

inquirer
    .prompt([
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
            name: "email",
            message: "What is your e-mail?"
        },
        {
            type: "input",
            name: "projectName",
            message: "What is the name of your Project?"
        },
        {
            type: "list",
            name: "licenseType",
            message: "Which license will be used for this project?",
            choices: ["MIT", "Apache 2.0", "GPLv3", "BSD 3-Clause", "Creative Commons (CC0)", "LGPLv3", "AGPLv3", "Hippocratic 3.0", "WTFPL", "None" ]
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
            name: "contributions",
            message: "Who contributed to this project, besides yourself?"
        },
        {
            type: "input",
            name: "tests",
            message: "What testing was done on this project?"
        }
    ])
    .then((responses) => {
        console.log(responses);
        writeToFile("README1.md", generateMarkdown(responses));
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if(error) throw error;
        console.log("File is being made!");
    });
};