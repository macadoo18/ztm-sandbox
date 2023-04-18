var database = [
  {
    username: 'andrei',
    password: 'supersecret',
  },
  {
    username: 'mac',
    password: 'topsecret',
  },
  {
    username: 'adoo',
    password: 'kindasecret123',
  },
];

var newsfeed = [
  {
    username: 'Bobby',
    timeline: 'So tired from all that learning!',
  },
  {
    username: 'Sally',
    timeline: 'Javascript is sooooo cool!',
  },
  {
    username: 'Mitch',
    timeline: 'Javascript is preeetyy cool!',
  },
];

function userValidation(user, pass) {
  for (let i = 0; i < database.length; i++) {
    if (user === database[i].username && pass === database[i].password) {
      return true;
    }
  }
  return false;
}

function login(user, pass) {
  if (userValidation(user, pass)) {
    console.log(newsfeed);
  } else {
    alert('sorry, wrong username or password');
  }
}

let usernamePrompt = prompt(`What's your username?`);
let passwordPrompt = prompt(`What's your password?`);

login(usernamePrompt, passwordPrompt);
