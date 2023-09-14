const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require("./lib/shapes");

// class SVG that takes in constructor and renders the file, the text tag, the shape
class Svg{
    constructor(){
        this.textElement =''
        this.shapeElement = ''
    }
    render(){
        return `<svg version="1.1 xmlns="http://wwww.w3.org/2000/svg" width="300" height="200"/>`
    }
    setTextElement(text,textcolor){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>`
    }
    setShapeelement(shape){
        this.shapeElement = shape.rendor()
    }
};

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



function writeToFile (fileName, data){
    fs.wrtieFile(fileName, data, function(err){
        if (err){
            return console.log(err);
        }
        console. log ("generated logo.svg")
    })
}



function generateLogo(){
    var svgString="";
    //questions prompt with inquirer
    inquirer.prompt(questions).then((responses)=> {
    console.log(responses);
    //setting the choices to variables
    let shapeChoice = responses["shape"];
    let shapeColor= responses["logocolor"];
    let text = responses["text"];
    let textColor = responses ["textcolor"];
    let userShape;
    console.log(text);
    console.log(textColor);
    console.log(shapeChoice);
    console.log(shapeColor);
    //if statements for the shape choices which pull in the shape object per the choice
    if ( shapeChoice === "Square"){
        userShape= new Square ();
    }
    else if ( shapeChoice === "Circle"){
        userShape= new Circle ();
    }
    else if ( shapeChoice === "Triangle"){
        userShape= new Triangle ();
    }
    else (console.log ("Error in shape"))
    userShape.setColor(shapeColor);

    // creating the SVG and then implementing the choices
    var svg = new Svg ();
    svg.setTextElement(text, textColor);
    svg.setShapeelement(userShape);
    // rendering the string that will go into the svg file
    svgString = svg.render();
    //writing file with the svgstring as the data to put into the file
    writeToFile( 'logo.svg',svgString);
})}

//calls the generate logo function
generateLogo();

