const managerQuestions = [ // Add validation for inputs
  {
    'type': 'input',
    'message': "What is the team manager's name?",
    'name': 'name',
    // 'default': 'f',
    // 'validation': ...
  },
  {
    'type': 'input',
    'message': "What is the team manager's employee ID?",
    'name': 'ID',
  },
  {
    'type': 'input',
    'message': "What is the team manager's email address",
    'name': 'email',
  },
  {
    'type': 'input',
    'message': "What is the team manager's office number?",
    'name': 'office',
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
    'name': 'name',
    // 'default': 'f',
    // 'validation': ...
  },
  {
    'type': 'input',
    'message': "What is the engineer's ID?",
    'name': 'ID',
  },
  {
    'type': 'input',
    'message': "What is the engineer's email address",
    'name': 'email',
  },
  {
    'type': 'input',
    'message': "What is the engineer's github?",
    'name': 'github',
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
    'name': 'name',
    // 'default': 'f',
    // 'validation': ...
  },
  {
    'type': 'input',
    'message': "What is the intern's ID?",
    'name': 'ID',
  },
  {
    'type': 'input',
    'message': "What is the intern's email address",
    'name': 'email',
  },
  {
    'type': 'input',
    'message': "What is the intern's school?",
    'name': 'school',
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