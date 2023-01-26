const inquirer = require('inquirer');
const fs = require('fs');
const [managerQuestions, engineerQuestions, internQuestions] = require('./src/questions.js');
const { formatProfiles, createProfileHTML, outputHTML } = require('./src/profiles.js');

const profiles = [];
const exampleProfiles = [
  {
    'name': 'a',
    'ID': 1,
    'email': 'a@email.com',
    'office': 27,
    'continue': 'Add Engineer'
  },
  {
    'name': 'b',
    'ID': 2,
    'email': 'b@email.com',
    'github': 'b-github',
    'continue': 'Add Intern'
  },
  {
    'name': 'c',
    'ID': 3,
    'email': 'c@email.com',
    'school': 'school name',
    'continue': 'Finish Team'
  }
]

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
  // createHTML(exampleProfiles);
  const formattedProfiles = formatProfiles(exampleProfiles);
  const profileHTML = formattedProfiles.map(createProfileHTML).join('');
  const output = outputHTML(profileHTML);
  fs.writeFile('./dist/index.html', output, (err) => {
    if (err) {
      throw err;
    } else {
      console.log('Team Profile created successfully')
    }
  });
}