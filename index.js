const inquirer = require('inquirer');

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