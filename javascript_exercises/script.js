// FUNCTIONS:

// function declaration
function sayHello() {
  console.log('Hello!');
}

// anonymous function expression
let sayBye = function () {
  console.log('Bye!');
}; // function expressions end with a semicolon

// expression: something that denotes a value
1 + 3;
let a = 2;
return true;

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?
function checkDriverAge() {
  let age = prompt('What is your age?');

  if (Number(age) < 18) {
    console.log('Sorry, you are too yound to drive this car. Powering off');
  } else if (Number(age) > 18) {
    console.log('Powering On. Enjoy the ride!');
  } else if (Number(age) === 18) {
    console.log('Congratulations on your first year of driving. Enjoy the ride!');
  }
}

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.
let checkDriverAge1 = function () {
  let age = prompt('What is your age?');

  if (Number(age) < 18) {
    console.log('Sorry, you are too yound to drive this car. Powering off');
  } else if (Number(age) > 18) {
    console.log('Powering On. Enjoy the ride!');
  } else if (Number(age) === 18) {
    console.log('Congratulations on your first year of driving. Enjoy the ride!');
  }
};

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!"
function checkDriverAge2(age) {
  if (Number(age) < 18) {
    return 'Sorry, you are too yound to drive this car. Powering off';
  } else if (Number(age) > 18) {
    return 'Powering On. Enjoy the ride!';
  } else if (Number(age) === 18) {
    return 'Congratulations on your first year of driving. Enjoy the ride!';
  }
}

// DATA STRUCTURES
// ARRAYS:

var arr = ['Banana', 'Apples', 'Oranges', 'Blueberries'];

// 1. Remove the Banana from the array.
// arr.shift();
console.log(arr);

// 2. Sort the array in order.
// arr.sort();
console.log(arr);

// 3. Put "Kiwi" at the end of the array.
arr.push('Kiwi');
console.log(arr);

// 4. Remove "Apples" from the array.
// arr.splice(1, 1);
console.log(arr);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
arr.reverse();
console.log(arr);

// using this array,
var array2 = ['Banana', ['Apples', ['Oranges'], 'Blueberries']];
// access "Oranges".
console.log(array2[1][1][0]);

// EXERCISE: Objects And Arrays For Facebook App
// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
const user = {
  username: 'billyboy',
  password: 'supersecret123',
};

// 2. Create an array which contains the object you have made above and name the array "database".
const database = [user];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
const newsfeed = [
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

const userNamePrompt = prompt(`What's your username?`);
const passwordPrompt = prompt(`What's your password?`);

function login(username, password) {
  if (username === database[0].username && password === database[0].password) {
    console.log(newsfeed);
  } else {
    alert('Failed to login');
  }
}

login(userNamePrompt, passwordPrompt);

// LOOPS
let todos = [
  'clean room',
  'brush teeth',
  'exercise',
  'study javascript',
  'eat healthy'
];

// for loop
const todosLength = todos.length;
for (let i = 0; i < todosLength; i++) {
  todos[i] = todos[i] + '!';
  todos.pop();
}

// forEach method
// more concise version of a for loop
// first parameter = array item, second parameter = index
todos.forEach(function(todos, i) {
  console.log(todos, i);
})

// while loop
// checks the condition first
let counterOne = 10;
while (counterOne > 10) {
  console.log('while', counterOne);
  counterOne--;
}

// do while
// runs the do first
do {
  console.log('do while', counterTwo);
  counterTwo--;
} while (counterTwo > 10);