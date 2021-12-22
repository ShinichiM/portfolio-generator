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

const promptUser = () => {
 return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?' 
    }
  ])
}

promptUser().then(answers => console.log(answers))