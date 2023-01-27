const inquirer = require('inquirer');
const fs = require('fs');

const { createProfileHTML, outputHTML } = require('./src/profiles.js');
const [managerQuestions, engineerQuestions, internQuestions] = require('./src/questions.js');

const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

const managers = [];
const engineers = [];
const interns = [];

init();

function init() {
  askManagerQuestions();
}

function askManagerQuestions() {
  inquirer
    .prompt(managerQuestions)
    .then((data) => {
      managers.push(new Manager(data.name, data.id, data.email, data.office));
      routeQuestions(data.continue);
    })
}

function askEngineerQuestions(input) {
  inquirer
    .prompt(engineerQuestions)
    .then((data) => {
      engineers.push(new Engineer(data.name, data.id, data.email, data.github));
      routeQuestions(data.continue);
    })
}

function askInternQuestions(input) {
  inquirer
    .prompt(internQuestions)
    .then((data) => {
      interns.push(new Intern(data.name, data.id, data.email, data.school));
      routeQuestions(data.continue);
    })
}

function routeQuestions(continueQ) {
  switch (continueQ) {
    case 'Add Engineer':
      askEngineerQuestions();
      break;
    case 'Add Intern':
      askInternQuestions();
      break;
    case 'Finish Team':
      finishTeam();
  };
}

function finishTeam() {
  let profileHTML = createProfileHTML(managers, 'Manager');
  profileHTML += createProfileHTML(engineers, 'Engineer');
  profileHTML += createProfileHTML(interns, 'Intern');
  const output = outputHTML(profileHTML);
  fs.writeFile('./dist/index.html', output, (err) => {
    if (err) {
      throw err;
    } else {
      console.log('Team Profile created successfully')
    }
  });
}