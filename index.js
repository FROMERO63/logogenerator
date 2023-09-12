const { error } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require("./lib/shapes.js");
{}
class Svg{
    constructor(){
        this.textElement =''
        this.shapeElement = ''
    }
    render(){
        return `<svg version="1.1 xmlns="http://wwww.w3.org/2000/svg" width="300" height="200"/>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>`
    }
}

questions =    [
    {
        type: 'input',
        message: 'Please enter the 3 characters to represent your logo',
        name: 'text'
    },
    {
        type: 'input',
        message: 'Please enter color for logo text',
        name: 'textcolor'
    },
    {
        type: 'list',
        message: 'Please choose a shaoe from below',
        name: 'shape',
        choices: ['Square','Circle','Triangle']
    },
    {
        type: 'input',
        message: 'Please enter color for logo shape',
        name: 'logocolor'
    }
]



// function writeToFile (fileName, data){
//     return fs.writeFileSync(path.join(process.cwd(),fileName),data);
// }

function logoChoices(){
    inquirer.prompt(questions).then((responses)=> {
    console.log(responses);
    console.log("Generated logo.svg");
    generateLogo();
  //  writeToFile("logo.sgv", generateLogo({...responses}))
    })}


logoChoices();

