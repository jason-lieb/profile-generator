function createProfileHTML(profiles, type) {
  let output = [];
  profiles.forEach((profile) => {
    let lastProp, icon;
    switch (type) {
      case 'Manager':
        lastProp = `Office Number: ${profile.office}`;
        icon = 'fa-solid fa-mug-hot';
        break;
      case 'Engineer':
        lastProp = `Github: <a class="text-decoration-none" href="https://github.com/${profile.github}">${profile.github}</a>`;
        icon = 'fa-regular fa-glasses';
        break;
      case 'Intern':
        lastProp = `School: ${profile.school}`;
        icon = 'fa-solid fa-user-graduate';
        break;
    }
    output.push(`
  <div class="card m-2 shadow">
    <div class="card-title bg-primary px-3 py-1 m-0">
      <h2 class="text-white mt-2">${profile.name}</h2>
      <i class="${icon}"></i>
      <h3 class="text-white">${type}</h3>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${profile.id}</li>
        <li class="list-group-item">Email: <a class="text-decoration-none" href="mailto:${profile.email}">${profile.email}</a></li>
        <li class="list-group-item">${lastProp}</li>
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
  <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc" crossorigin="anonymous"></script>
  <title>Team Profile</title>
</head>
<body>
<div class="container-fluid text-center bg-danger p-5 mb-5">
  <h1 class="text-white">My Team</h1>
</div>
<div class="container d-flex">
  ${profileHTML}
</div>
</body>
</html>
`;
return output;
}

module.exports = { createProfileHTML, outputHTML }