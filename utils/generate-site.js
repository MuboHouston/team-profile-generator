//node module
const fs = require("fs");

//links to page creation
const generatePage = require('../src/page.template.js');

//generates HTML page file using file system
const writeFile = teamArr => {
    return new Promise((resolve, reject) => {
        const pageHTML = generatePage(teamArr) 
        fs.writeFile('./dist/index.html', pageHTML, err => {
            if(err) {
                reject(err)
                return;
        } 
            resolve({
                ok: true,
                message: "File copied"
                // console.log(teamArr)
            })
        })
    })
}

//generates css file using file system
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile("./src/style.css", "./dist/style.css", err =>{
            if(err) {
                reject(err);
                return;
        } 
            resolve({
                ok: true,
                message: "Style sheet copied successfully!"
            })
        })
    })
}

module.exports = {writeFile, copyFile};