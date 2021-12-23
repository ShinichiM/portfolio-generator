const fs = require('fs');

// promsie for writing a file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {reject(err); return} 
            resolve({ok: true, message: 'file created'}); 
        });
    }).catch(err => {console.log(err)});
};
// promise for copying a file
const copyFile = (source, destination) => {
    return new Promise((resolve, reject) => {
        fs.copyFile(source, destination, err => {
            if (err) {reject(err); return}
            resolve({ok: true, message: 'file copied'});
        });
    });
};

module.exports = {writeFile, copyFile};