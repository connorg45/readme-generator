// Required packages
const fs = require('fs'); // File System module to read and write files
const inquirer = require('inquirer'); // Library for handling user input
const generateMarkdown = require('./utils/generateMarkdown'); // Function to generate the README content

// Array of questions for user input
const questions = [
    // Questions to gather information for the README
    {
        type: 'input',
        name: 'appName',
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

// Function to write README file with provided data
function writeToFile(fileName, data) {
    // Generate the README content using the provided data
    const readmeContent = generateMarkdown(data);

    // Write the content to the specified file
    fs.writeFile(fileName, readmeContent, (error) => {
        if (error) {
            console.log('Error writing to file:', error);
        } else {
            console.log('README file generated successfully!');
        }
    });
}

// Function to initialize the application
function init() {
    // Prompt the user with the questions and gather responses
    inquirer.prompt(questions).then((data) => {
        console.log('Generating README...');
        // Generate the README file using the user responses and write it to the file
        writeToFile('README.md', data);
    });
}

// Call the init() function to start the application
init();
