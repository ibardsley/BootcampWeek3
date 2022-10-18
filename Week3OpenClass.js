// Arrays
// Write a Function to Reverse an Array: 
// Write a function called reverseArray that accepts an array as an argument. 
// Within the function, reverse the array. Return the reversed array.
// You must use a method of the Array object.

// var fs = require("fs");
// var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");

//write your code here

function reverseArray(){ //missing array as the parameter
    let testArray = ["test"];
    console.log(testArray.reverse);
}

// Correct answer
// function reverseArray(array){
//     return array.reverse();
// }

// do not change
// for testing purposes

console.log(reverseArray(input));

// Array Fun: Using the given function, gradList, add the following names to the passed array: 
// "Mary", "Steven", "Eddie". Then, sort the remaining students from Z-A, and return the modified array.
// The passed array is the graduates variable. 
// First add the names to the graduates array using push. 
// Then sort the names and finally return the reversed array.

var fs = require("fs");
var grads = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");

function gradList(graduates){
    //write your code here
    grads.push("Mary", "Steven", "Eddie");
    grads.sort();
    return grads.reverse();
}
console.log(gradList(grads));

// another way to write
// function gradList(graduates){
    //write your code here
//     graduates.push("Mary", "Steven", "Eddie");
//     graduates.sort();
//     let reverseGrads = graduates.reverse();
//     return reverseGrads;
// }
// console.log(gradList(grads));


// Grocery List Array: Create an array called groceryList and add "granola", "milk", and "eggs"
let groceryList = ["granola", "milk", "eggs"];
// do not change below
// for testing purposes
console.log(groceryList)

// Write a Function to Print the Elements of an Array: 
// Write a function called printArray that accepts an array as an argument, 
// and contains a loop that will print each value of the passed in array.
// Do not edit the array in its current state. You must use a method of the Array object.

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");

//write your code here
function printArray(array){
    for(let i = 0; i < input.length; i++){
        console.log(input[i]);
    }
}

// do not change
// for testing purposes
printArray(input);

// // Write a Function to Sort an Array: 
// Write a function called sortArray that accepts an array as an argument.
// Within the function, sort the array alphabetically or numerically. Return the sorted array.
// You must use a method of the Array object

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");

//write your code here
function sortArray(array){
    return array.sort();
}
// do not change
// for testing purposes

console.log(sortArray(input));

// Write a Function to Join Two Arrays: 
// Write a function called joinArrays that accepts two arrays as arguments, 
// joins the two arrays and returns the new array.
// You must use a method of the Array object

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var staticArray = ["Henry", "Peter", "Julie"];

//write your code here
function joinArrays(array1, array2){
    const joinedArray = array1.concat(array2);
    return joinedArray;
}
// do not change
// for testing purposes

console.log(joinArrays(input, staticArray));


// Functions
// Function returnSum: 
// Create a function named returnSum that accepts 3 integer parameters 
// named num1, num2, and num3 and returns the sum of the three parameters.

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

//write your code below

function returnSum(num1, num2, num3){
    return num1 + num2 + num3;
}
//do not change below, used for testing purposes
console.log(returnSum(a,b,c));


// Function sumOfTwo: 
// Write a function named sumOfTwo that takes two numbers as parameters and returns the sum.

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

//write your code below

function sumOfTwo(num1, num2){
    return num1 + num2;
}
//do not change. Used for Testing purposes
console.log(sumOfTwo(a, b))


// Function isBlue: Create a function named isBlue. 
// isBlue will take one parameter, and it will return true if it is passed "blue", otherwise it will return false.
// The passed value can be "blue" with any of the letters capitalized as well. 
// (i.e."Blue", "bLue", "BLUE", etc…) All forms of the word blue should return true. 
// Use toLowerCase() on the passed value to accomplish this. 
// For example, myVariable.toLowerCase() will convert whatever myVariable is to all lowercase.

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var a = input[0];

//write your code below

function isBlue(color){
    if(color.toLowerCase() === "blue"){
        return true;
    }else {
        return false;
    }
}
//do not change below, used for testing purposes
console.log(isBlue(a));

// Another way to write

// function isBlue(var1){
//     return var1.toLowerCase() === "blue";
// }