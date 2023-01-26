const managerQuestions = [ // Add validation for inputs
  {
    'type': 'input',
    'message': "What is the team manager's name?",
    'name': 'managerName',
    // 'default': 'f',
    // 'validation': ...
  },
  {
    'type': 'input',
    'message': "What is the team manager's employee ID?",
    'name': 'managerID',
  },
  {
    'type': 'input',
    'message': "What is the team manager's email address",
    'name': 'managerEmail',
  },
  {
    'type': 'input',
    'message': "What is the team manager's office number?",
    'name': 'managerOffice',
  },
  {
    'type': 'list',
    'message': "Add Engineer, Add Intern, or Finish Team",
    'name': 'continue',
    'choices': [
      'Add Engineer',
      'Add Intern',
      'Finish Team'
    ]
  }
]

const engineerQuestions = [
  {
    'type': 'input',
    'message': "What is the engineer's name?",
    'name': 'engineerName',
    // 'default': 'f',
    // 'validation': ...
  },
  {
    'type': 'input',
    'message': "What is the engineer's ID?",
    'name': 'engineerID',
  },
  {
    'type': 'input',
    'message': "What is the engineer's email address",
    'name': 'engineerEmail',
  },
  {
    'type': 'input',
    'message': "What is the engineer's github?",
    'name': 'engineerGithub',
  },
  {
    'type': 'list',
    'message': "Add Engineer, Add Intern, or Finish Team",
    'name': 'continue',
    'choices': [
      'Add Engineer',
      'Add Intern',
      'Finish Team'
    ]
  }
];

const internQuestions = [
  {
    'type': 'input',
    'message': "What is the intern's name?",
    'name': 'internName',
    // 'default': 'f',
    // 'validation': ...
  },
  {
    'type': 'input',
    'message': "What is the intern's ID?",
    'name': 'internID',
  },
  {
    'type': 'input',
    'message': "What is the intern's email address",
    'name': 'internEmail',
  },
  {
    'type': 'input',
    'message': "What is the intern's school?",
    'name': 'internSchool',
  },
  {
    'type': 'list',
    'message': "Add Engineer, Add Intern, or Finish Team",
    'name': 'continue',
    'choices': [
      'Add Engineer',
      'Add Intern',
      'Finish Team'
    ]
  }
];

module.exports = [managerQuestions, engineerQuestions, internQuestions];