const inquirer = require('inquirer');
// const fs = require('fs');
const portfolioData = [];
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
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username'
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information yourself:'
    }
  ])
}

const promptProject = portfolioData => {
  console.log(portfolioData)
  console.log(portfolioData.projects)
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
 console.log(`
 =================
 Add a New Project
 =================
 `); 
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (REQUIRED)'
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check All that Apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (REQUIRED)'
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type:'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default:'false'
    }
  ]).then(projectData => {
    portfolioData.projects.push(projectData);
    
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData)
    } else {
      return portfolioData
    }
  })
}

promptUser().then(promptProject).then(portfolioData => {
  console.log(portfolioData)
})
