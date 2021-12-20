



const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name3, github] = profileDataArgs;

const generatePage = (userName, githubName) => {

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>

    <body>
        <h1>${userName}</h1>
        <h2><a href='https://github.com/${githubName}'>Github</a></h2>
    </body>
    </html>
    `;
}

console.log(name3, github);
console.log(generatePage(name3, github));
