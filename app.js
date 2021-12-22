const fs = require('fs');
const generatePage = require('./src/page-template.js')
const profileDataArgs = process.argv.slice(2);
const [name3, github] = profileDataArgs;



fs.writeFile('./index.html', generatePage(name3, github), err => {
  if (err) throw err;

  console.log('Portfoilio complete! Check out index.html to see the output!')
})