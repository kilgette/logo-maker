const inquirer = require('inquirer');
const Triangle = require('./lib/triangle')
//Prompt the user for input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text for the logo (up tto three characters):',
    },
    {
      type: 'input',
      name: 'textColor',
    }
  ])

  .then((data) => {
    console.log(data);
    const shape = new Triangle(data.textColor)
    console.log(shape);
    console.log(shape.render())
  })