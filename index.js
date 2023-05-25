const inquirer = require('inquirer');
const { Triangle } = require('./lib/triangle')
const { Circle } = require('./lib/circle')
const { Square } = require('./lib/square')
const fs = require('fs');

//Prompt the user for input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text for the logo (up to three characters):',
    },
    {
      type: 'input',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'choose a shape:',
      name: 'shape',
      choices: ['circle', 'square', 'triangle',]
    },
  ])

  //add conditional statement which prompts inquirer to use one 
  // of the provided shapes 

  .then((data) => {
    console.log(data);
    // const shape = new Triangle(data.textColor, data.text);
    // console.log(shape);
    // console.log(shape.render())

  let shape
    if (data.shape === "triangle") {
        shape = new Triangle(data.textColor, data.text);
    } else if (data.shape === 'circle') {
        shape = new Circle(data.textColor, data.text);
    } else if (data.shape === 'square') {
        shape = new Square(data.textColor, data.text);
    }

saveSVGToFile(shape.render())
  })

//callback function to take the SVG code as an argument and save to file
function saveSVGToFile(svgCode) {
  fs.writeFile('logo.svg', svgCode, (err) => {
    if (err) {
      console.error('Error saving the SVG file:', err);
      return;
    }
    console.log('Generated logo.svg');
  });
}