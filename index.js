const { error } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require("./lib/shapes");

// class Svg{
//     constructor(){
//         this.textElement =''
//         this.shapeElement = ''
//     }
//     render(){
//         return `<svg version="1.1 xmlns="http://wwww.w3.org/2000/svg" width="300" height="200"/>`
//     }
//     setTextElement(text,textcolor){
//         this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>`
//     }
//     setShapeelement(shape){
//         this.shapeElement = shape.rendor()
//     }
// };

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
//     fs.wrtieFile(fileName, data, function(err){
//         if (err){
//             return console.log(err);
//         }
//         console. log ("generated logo.svg")
//     })
// }



function generateLogo(){
    //var svgString="";
    inquirer.prompt(questions).then((responses)=> {
    console.log(responses);
    let shapeChoice = responses["shape"];
    let shapeColor= responses["logocolor"];
    let text = responses["text"];
    let textColor = responses ["textcolor"];
    //let userShape;
    console.log(text);
    console.log(textColor);
    console.log(shapeChoice);
    console.log(shapeColor);})
    // if ( shapeChoice === "Square"){
    //     userShape= new Square ();
    //     console.log(shapeChoice);
    //     console.log(shapeColor);
    }



generateLogo();

