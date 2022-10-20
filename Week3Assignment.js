console.log("Question #1");
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

console.log("1a solution");
let subtract1 = ages[ages.length - 1] - ages[0];
console.log(subtract1);

console.log("1b solution");
ages.push(37);
console.log(ages);

let subtract2 = ages[ages.length - 1] - ages[0];
console.log(subtract2);

console.log("1c solution");
let sum1c = 0
for(i = 0; i < ages.length; i++){
    sum1c += ages[i];
}
    console.log(sum1c / i);


console.log("Question #2");
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

console.log("2a solution")
let sum2a = 0
for(let i = 0; i < names.length; i++){
    // console.log(names[i].length); this confirms we are seeing the length of each name
    sum2a += names[i].length;
}
console.log(sum2a / names.length);

console.log("2b solution")
let namesString = ""
for(let i = 0; i < names.length; i++){
    namesString += names[i] + " ";
}
console.log(namesString);

console.log("Question #3")
console.log("To access the last element in an array you must use the array name [name.length -1]. For example, to access the last name in the array above I type - console.log(names[names.length - 1]);")
console.log(names[names.length - 1]);

console.log("Question #4")
console.log("To access the first element of an array, you must type the array name [0]. For example, to access the first name in the array above I would type console.log(names[0]);")
console.log(names[0]);