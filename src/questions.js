const managerQuestions = [
  {
    'type': 'input',
    'message': "What is the team manager's name?",
    'name': 'name',
    'validate': (input) => {
      if (input.trim().match(/^[a-z ]+$/i)) {
        return true;
      } else {
        return 'Please input a name';
      }
    }
  },
  {
    'type': 'input',
    'message': "What is the team manager's employee ID?",
    'name': 'id',
    'validate': (input) => {
      if (input.trim().match(/^\d+$/)) {
        return true;
      } else {
        return 'Please input a number';
      }
    }
  },
  {
    'type': 'input',
    'message': "What is the team manager's email address",
    'name': 'email',
    'validate': (input) => {
      if (input.trim().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        return true;
      } else {
        return 'Please input a properly formatted email';
      }
    }
  },
  {
    'type': 'input',
    'message': "What is the team manager's office number?",
    'name': 'office',
    'validate': (input) => {
      if (input.trim().match(/^\d+$/)) {
        return true;
      } else {
        return 'Please input a number';
      }
    }
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
    'validate': (input) => {
      if (input.trim().match(/^[a-z ]+$/i)) {
        return true;
      } else {
        return 'Please input a name';
      }
    }
  },
  {
    'type': 'input',
    'message': "What is the engineer's ID?",
    'name': 'id',
    'validate': (input) => {
      if (input.trim().match(/^\d+$/)) {
        return true;
      } else {
        return 'Please input a number';
      }
    }
  },
  {
    'type': 'input',
    'message': "What is the engineer's email address",
    'name': 'email',
    'validate': (input) => {
      if (input.trim().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        return true;
      } else {
        return 'Please input a properly formatted email';
      }
    }
  },
  {
    'type': 'input',
    'message': "What is the engineer's github?",
    'name': 'github',
    'validate': (input) => {
      if (input.trim().match(/^\S+$/i)) {
        return true;
      } else {
        return 'Please input a github username without spaces';
      }
    }
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
    'validate': (input) => {
      if (input.trim().match(/^[a-z ]+$/i)) {
        return true;
      } else {
        return 'Please input a name';
      }
    }
  },
  {
    'type': 'input',
    'message': "What is the intern's ID?",
    'name': 'id',
    'validate': (input) => {
      if (input.trim().match(/^\d+$/)) {
        return true;
      } else {
        return 'Please input a number';
      }
    }
  },
  {
    'type': 'input',
    'message': "What is the intern's email address",
    'name': 'email',
    'validate': (input) => {
      if (input.trim().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        return true;
      } else {
        return 'Please input a properly formatted email';
      }
    }
  },
  {
    'type': 'input',
    'message': "What is the intern's school?",
    'name': 'school',
    'validate': (input) => {
      if (input.trim().match(/^[a-z ]+$/i)) {
        return true;
      } else {
        return 'Please input a school name';
      }
    }
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