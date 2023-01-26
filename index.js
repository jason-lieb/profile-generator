const inquirer = require('inquirer');
const fs = require('fs');
const [managerQuestions, engineerQuestions, internQuestions] = require('./src/questions.js');

const profiles = [];

init();

function init() {
  // let prompts = inquirer.createPromptModule();
  // prompts(managerQuestions).then((data) => profiles.push(data));
  // inquirer.prompt(managerQuestions);
    // .then((data) => profiles.push(data));
  // managerQuestions.next(engineerQuestions);
  // while (profiles[profiles.length - 1].continue !== 'Finish Team') {
  //   if (profiles[profiles.length - 1].continue === 'Engineer') {
  //     // inquirer
  //     //   .prompt(engineerQuestions)
  //     //   .then((data) => profiles.push(data));
  //   } else {
  //     // inquirer
  //     //   .prompt(internQuestions)
  //     //   .then((data) => profiles.push(data));
  //   }
  // }
  // console.log(profiles);
}

// function createFile() {
//   //
// }

// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, generateMarkdown(data), (err) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log('README File written successfully')
//     }
//   });
// }