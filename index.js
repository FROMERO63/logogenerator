const fs = require('fs');
const inquirer = require('inquirer');


const questions = [
    {
        type: 'input',
        message: 'Please enter the 3 characters to represent your logo',
        name: 'text'
    },
    {
        type: 'input',
        message: 'Please enter color for logo text',
        name: 'logocolor'
    },
    {
        type: 'list',
        message: 'Please choose a shaoe from below',
        name: 'shape',
        choices: ['square','circle','triangle']
    },
    {
        type: 'input',
        message: 'Please enter color for logo shape',
        name: 'shapecolor'
    }
]