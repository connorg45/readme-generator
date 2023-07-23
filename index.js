// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install the project or its dependencies?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use the project? Provide usage instructions:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the contribution guidelines for the project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How do you run tests for the project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileData = generateMarkdown(data);
    fs.writeFile(fileName, fileData, (error) => error ? console.log(error) : console.log('File generated :D'));
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
