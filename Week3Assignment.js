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

console.log("Question #5")
let namesLength = []
for (let i = 0; i < names.length; i++){
    namesLength.push(names[i].length);
}
console.log(namesLength);

console.log("Question #6")
let sum6 = 0

for(let i = 0; i < namesLength.length; i++){
    sum6 += namesLength[i]
}
console.log(sum6);

console.log("Question #7")

function hello(word, n){
    var helloString = ""
    while(n > 0){
        helloString += word;
        n--;
    } return helloString
}
console.log(hello("Hello", 3));

console.log("Question #8")
function fullName(firstName, lastName){
    console.log(firstName + " " + lastName);
}
fullName("Thomas", "Jefferson")

console.log("Question #9")
function counter(){
    let sum9 = 0;
    for(let i = 0; i < arguments.length; i++){
        let number = arguments[i];
        sum9 += number;
    }
    if(sum9 > 100){
        return true;
    } else {
        return false;
    }
}
console.log(counter(1,2,13,24,35,10,25))

console.log("Question #10")

function average(){
    let sum10 = 0;
    for(let i = 0; i < arguments.length; i++){
        let number = arguments[i];
        sum10 += number;
    } return sum10 / arguments.length
}
console.log(average(2,4,6,8,10,12,14,16))

console.log("Question #11")

function compareArrays(a, b){
    let sum11a = 0
    let sum11b = 0
    let average1 = 0
    let average2 = 0
      for (var i = 0; i < a.length; i++){
        let number1 = a[i];
        sum11a += number1;
    } average1 = sum11a / a.length
    for (var x = 0; x < b.length; x++){
        let number2 = b[x];
        sum11b += number2;
    } average2 = sum11b / b.length

    if (average1 > average2) 
    return true;  
  }
  let array1 = [21, 27, 33];
  let array2 = [21, 22, 24];
  
  console.log(compareArrays(array1, array2));

  console.log("Question #12")

function willBuyDrink(isHotOutside, moneyInPocket){
   
    if(isHotOutside && moneyInPocket > 10.50){
        console.log(true)
} else {
    console.log(false)
}
}

willBuyDrink(true, 20.50);

console.log("Question #13")

function wearCoatOutside(isColdOutside, temperature){
   
    if(isColdOutside && temperature >= 40 && temperature <= 55){
        console.log("Wear a sweatshirt")
} else if(isColdOutside && temperature >= 30 && temperature <= 39){
    console.log("Wear your winter coat")
} else if(isColdOutside && temperature <=29){
    console.log("Wear your winter coat, hat, and gloves")
} else {
    console.log("Enoy the warm weather")
}
}

wearCoatOutside(true, 54);