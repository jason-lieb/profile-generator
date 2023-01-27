function createProfileHTML(profiles, type) {
  let output = [];
  let lastProp, lastPropField;
  switch (type) {
    case 'Manager':
      lastPropField = 'Office Number';
      lastProp = 'office';
      break;
    case 'Engineer':
      lastPropField = 'Github';
      lastProp = 'github';
      break;
    case 'Intern':
      lastPropField = 'School';
      lastProp = 'school';
      break;
  }
  profiles.forEach((profile) => {
    output.push(`
<div class="card">
  <div class="card-title">
    <h2>${profile.name}</h2>
    <i></i>
    <h3>${type}</h3>
  </div>
  <div class="card-body">
    <ul>
      <li class="list-group-item">ID: ${profile.id}</li>
      <li class="list-group-item">Email: ${profile.email}</li>
      <li class="list-group-item">${lastPropField}: ${profile[lastProp]}</li>
    </ul>
  </div>
</div>`)
  });

return output;
}

function outputHTML(profileHTML) { //<link rel="stylesheet" href="./style.css">
  let output =
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  <title>Team Profile</title>
</head>
<body>
<div class="container-fluid text-center bg-danger p-5 mb-5">
  <h1 class="text-white">My Team</h1>
</div>
<div class="container">
  ${profileHTML}
</div>
</body>
</html>
`;
return output;
}

module.exports = { createProfileHTML, outputHTML }