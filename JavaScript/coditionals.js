const result = document.getElementById("demo");

// Coditional statements are used to perform diff actions based on diff coditions.
// 1.if,  2.else,  3.else if,  4.switch.
// 1.Use if to specify the block of code to be executed, if the specified condition is true.
// 2.Use else to specify the block of code to be executed, if the same condition is false.
// 3.Use else if to specify the new condition to test, if the first condition is false.
// 4.Use switch to specify many alternative blockes of code to be executed.

// 1.if  2.else  3.else if
if(new Date().getHours() < 11){
    result.innerHTML = "Good Morning!";
}else if(new Date().getHours() < 18){
    result.innerHTML = "Good Day!";
}else if(new Date().getHours() < 23){
    result.innerHTML = "Good Evening!";
}else{
    result.innerHTML = "Good Night!";
}

// 4.Switch
let day;
switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        "value not found";
}
result.innerHTML = day;



let fruits = "Pineapple";
switch(fruits){
    case "Banana":
        fruits = "Banana is Rs15/Kg";
        break;
    case "Apple":
        fruits = "Apple is Rs40/Kg";
        break;
    case "Orange":
        fruits = "Orange is Rs30/Kg";
        break;
    case "CustordApple":
        fruits = "Custord Apple is Rs30/Kg";
        break;
    case "Mango":
        fruits = "mango is Rs50/Kg";
        break;
    default:
        fruits = `${fruits} are over today, will came tomorrow.`;
}
result.innerHTML = fruits;

// ex. orange and custord apple shares same code block.
let fruitss = "Custord Apple";
switch(fruitss){
    case "Banana":
        fruitss = "Banana is Rs20/Kg";
        break;
    case "Apple":
        fruitss = "Apple is Rs80/Kg";
        break;
    case "Orange":
    case "Custord Apple":
        fruitss = "Orange & Custord Apple is Rs120/Kg";
        break;
    case "Mango":
        fruitss = "mango is Rs100/Kg";
        break;
    default:
        fruitss = `${fruits} are over today, will came tomorrow.`;
}
result.innerHTML = fruitss;

// switch cases use strict comparision(===).
let x= "0";
switch(x){
    default:
        text = "Hello!";
        break;
    case 0:
        text = "Namaskar🙏";
        break;
    case 1:
        text = "Namaste";
}
result.innerHTML = text;
// // It is not must to have a default case in the last. remeber to end the default case with a break if above/between stack.
