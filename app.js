const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');

const promptUser = () => {
 return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: nameInput => {
        if (nameInput) {
          return true
        } else {
          console.log('Please enter your name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username',
      validate: githubInput => {
        if (githubInput) {
          return true
        } else {
          console.log('Please enter a valid github name');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: "Would you like to enter some information about yourself for an 'About' section?",
      default: true
    }, 
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({confirmAbout}) => {
        if (confirmAbout) {
          return true;
        } else {
          return false;
        }
      }
    }
  ])
}

const promptProject = portfolioData => {
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
      message: 'What is the name of your project',
      validate: projectName => {
        if (projectName) {
          return true;
        } else {
          console.log('Please input a valid project name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (REQUIRED)',
      validate: projectDescription => {
        if (projectDescription) {
          return true;
        } else {
          console.log('Please input a valid project description');
          return false;
        }
      }
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
      message: 'Enter the GitHub link to your project. (REQUIRED)',
      validate: githubLink => {
        if (githubLink) {
          return true;
        } else {
          console.log('Please input a valid github link');
          return false;
        }
      }
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
  const pageHTML = generatePage(portfolioData)
  
  fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw new Error(err);
    console.log('Page created, check out index.html in this directory to see it')
  })
})

// const pageHTML = generatePage(mockData);

// const {projects, about, ...header} = mockData;

// console.log(projects + ' : ' + about + ' : ' + header);