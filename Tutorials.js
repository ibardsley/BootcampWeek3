// Arrays
// group sismilar data together and avoid creating new
// variables for each piece of data
// refer to values by location (0,1,2,3...)
// add and remove variables from the array
// zero based meaning first at position 0 
// last is at 1 less than the full amount length of element minus 1
// assign variable as normal but use an array
// empty array create variable as normal with the []
// add names using the push method
var customerNames = []
customerNames.push('Sam Smith');
customerNames.push('Tommy Guns');

// To access an element in the array refer to the variable name
// add the [] to the end with the index we want to access

// customerNames[0] to access the first name [1] for the second

// arrays dynamically add or remove elements from them
// as well as perform actions for each element in an arrary
// using loops without having to repeat lines of code for each variable
// for example / length is = length of the array (how many names)
for(let i=0; i < customerNames.length; i++){
    console.log(customerNames[i]);
}
// Each name prints because the array customerNames is
// is a variable and each name is a number 0-last number

// For Of loop to accomplish the same outcome as above but shorter
for(name of customerNames){
    console.log(name);
}

// Functions
// allow us to write some code and then give it a name to be 
// reusued other tmes in the code anytime
// to create - function keyword / name we wish to give the function (){}
// function myFunction(){
// any code inside here will be executed any time we use the function
// }

function myFunction(){
    for(let i=0; i<100; i++){
        console.log(i);
    }
}
// writing a function is just writing the instructions
// must call upon it to run in order for it to work

// to invoke/call upon must refer to it by name

myFunction()

// we can put anything inside the function (loops, conditonals, variable etc.)
// some function take input to make it more dynamic
// parameters can be added in the () in the function
// make sure functions are responsible for doing one thing

// function create Full Name
function createFullName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}

createFullName('Tom', 'Sawyer')

// firstName is a parameter (like a parking spot) placeholders
// actual name is an argument (car) 
// car must be put in the parking space
// common mistake, declare function and try to put values in the parameters in the function
// important parameters are just placeholders for the values to be placced in.

// return statement will end the function and return whatever value follows

function createFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
// functions should be verbs since they are action words

// 5 methods on the Array
// Map, reduce, for each, filter, Splice 
// map - used to invoke a function for each element in an array and create a new array from the return values of each iterations function invocation
// useful to transform the data in an array in some manner

let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas'];
// map method to create a new array with the length of the name
let lengths = names.map(function(element) {
return element.length;
});
console.log(lengths);

// Reduce - taking the values in an array and reduces them into one value
// the final value is a result of a reducer function that we pass in as an argument
// reduce any time we need to perform an operation on all element in an array that results in a single value
// summing up all vlaues / finding the average / return an object with properties composed of ultiple objects
// 
let sum = lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sum);

// For Each similar to map but does not return a new array from the results of the invocation
// if we need to modify values and store them in an array use map
// if we only need to perform an action for each element in an array and don't care about storing the resulting value 
//  if we want to log out each element in an array

names.forEach(function(element) {
    console.log(element);
})

// Filter allows us to invoke a function that returns a boolean value on each element in an arrya
// returns a new array that contains all the elements where the invoked method returns true
// this allows us to use a boolean expression to filter out certain expressions and only keep the ones that pass our boolean
// filter for even number of characters

let evens = names.filter(function(element) {
return element.length % 2 == 0;
});
console.log(evens);

// Splice - used to alter the contents of array by adding modifying or removing elements from an array at a specific location
// read documentation on MDN?
// remove element from an array

let removedElement = names.splice(1, 1);
console.log(removedElement);

// names.splice(1, 1) first parameter is where to start and the second is how many to remove so start at position 1 and remove that 1 name "Tom"
// earch for js array and select the MDN documentation

// Objects
// sturcture that logically groups data and functionality together
// properties and functionality
// Object literals make up an objects property and functionality or methods
// wrapping a comma separated list of key value pairs inside curly braces.
// object representation of a DVD player
// inside {} is the object literal with properties to describe the object
var dvdPlayer = {
    height: 3,
    width: 18,
    depth: 12,
    weight: 7,
    color: 'black',
    dvdName: 'Mulan',
    printDVDName: function() {
        console.log(this.dvdName);
    }
}

// console.log(this.dvdName) this is referring to the object itself inside the object
// this objects property name

// method and function are similar
// function stand along
// method is a function belonging to an object

// dot notation name of identified/var . any of the values

console.log(dvdPlayer.depth);
dvdPlayer.printDVDName();


// assignment =, equality ==, and idenity === (strict equality) 
// equality will check if two values are the same and convert types to see
// if they are a match. "2" and 2 will evaluate to true
// equality will say if they are equal
// identity operator only returns true it it operens are both the same value and same type
// identity is used as the rule, equality only used when an exceptional need is presented

console.log(2 == "2"); //True same even though type difference
console.log(2 === "2"); //False not the same type or value

