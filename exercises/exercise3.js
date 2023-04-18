// change everything below to the newer Javascript!

// let + const
let a = 'test';
let b = true;
let c = 789;
a = 'test2';


// Destructuring
let person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const { firstName, lastName, age, eyeColor } = person;
// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;


// Object properties
a = 'test';
b = true;
c = 789;

const okObj = {
  a, b, c
};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";


// default arguments
// default age to 10;
const isValidAge = (age=10) => age;

function isValidAge(age) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"
const sym1 = Symbol('This is my first symbol');

// Arrow functions
const whereAmI = (username, location) => username && location ? 'I am not lost' : 'I am totally lost!';

function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}