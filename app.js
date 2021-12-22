const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
// 
// const [name3, github] = profileDataArgs;
// const pageHTML = generatePage(name3, github);
// 
// fs.writeFile('./index.html', pageHTML, err => {
// if (err) throw err;
// 
// console.log('Portfoilio complete! Check out index.html to see the output!')
// })

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?' 
    }
  ])
  .then((answers) => {
    console.log(answers) 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });