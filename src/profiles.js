function formatProfiles(profiles) {
  let nextProfile = '';
  let output = [];
  profiles.forEach((profile) => {
    let profileType = nextProfile === '' ? 'Manager' : nextProfile.slice(4);
    nextProfile = profile.continue;
    delete profile.continue;
    output.push({ ...profile, type: profileType });
  })
  return output;
}

function createProfileHTML(profile) {
  let changingProperty;
  switch (profile.type) {
    case 'Manager':
      changingProperty = 'Office';
      break;
    case 'Engineer':
      changingProperty = 'Github';
      break;
    case 'Intern':
      changingProperty = 'School';
      break;
  }

  let output =
`
<div class="card">
  <div class="card-title">
    <h2>${profile.name}</h2>
    <i></i>
    <h3>${profile.type}</h3>
  </div>
  <div class="card-body">
    <ul>
      <li class="list-group-item">ID: ${profile.ID}</li>
      <li class="list-group-item">Email: ${profile.email}</li>
      <li class="list-group-item">${changingProperty}: ${profile[changingProperty.toLowerCase()]}</li>
    </ul>
  </div>
</div>
`;

return output;
}

function outputHTML(profileHTML) {
  let output =

`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./style.css">
  <title>Team Profile</title>
</head>
<body>
${profileHTML}
</body>
</html>
`;
return output;
}

module.exports = { formatProfiles, createProfileHTML, outputHTML }