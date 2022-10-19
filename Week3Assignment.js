console.log("Question #1");
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

console.log("1a solution");
var subtract = ages[ages.length - 1] - ages[0];
console.log(subtract);

console.log("1b solution");
ages.push(37);
console.log(ages);

var subtract = ages[ages.length - 1] - ages[0];
console.log(subtract);

console.log("1c solution");
var sum = 0
for(i = 0; i < ages.length; i++){
    sum += ages[i];
}
    console.log(sum / i);


console.log("Question #2");
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

console.log("2a solution")

let lengths = names.map(function(element) {
    return element.length;
    });
    console.log(lengths);

var sum = 0

for(i = 0; i < lengths.length; i++){
     sum += lengths[i];
}
    console.log(sum / names.length);

    // var sum = lengths.reduce(function(num1, num2) {
    //     return num1 + num2;
    // });
    // console.log(sum / names.length);