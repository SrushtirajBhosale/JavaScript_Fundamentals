// // 1. Ways to print javascript
// console.log("Namaskar Srushtiraj");
// alert("me");
// prompt("Hello");
// document.write("This is document write");

// // 2. javascript console API[application programing interface]
// console.log("Namaskar", 3 + 4, "another log");
// console.warn("This is a warning");
// console.error("This is an error");

// // 3.javascript variables
// variables: containers to store data values
var num1 = 77.7;
var num2 = 33.3;
// console.log(num1+num2);

//4. Data types in javascript
// Numbers
var num1 = 11
var num2 = 22

// Strings
var str1 = "string1"
var str2 = "string2"

// Objects
var score = {
    manya: 10,
    ganya: 11,
    sonya: 12,
}

// Boolean
var x = true;
var y = false;

// undefined
 var und;

// null
var n = null;

//  console.log(num1, num2, str1, str2, score, x, y, und, null);

/*
 At a very high level, there are two types of data types in javascript
1. Primitive: (6) Number, String, Boolean, undefined, null, Symbol
2. Reference: Arrays and Objects
*/

var arr = [1, 2, "gotya", 4, 5]
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr.length);

// Operators in javascript
// Arithmatic operators
var a = 100;
var b = 10;
// console.log("The value of a - b is ", a - b); 
// console.log("The value of a + b is ", a + b); 
// console.log("The value of a * b is ", a * b); 
// console.log("The value of a / b is ", a / b); 

// Assignment operator
var c = b;
c += 2;   // c = c + 2
c -= 2;
c *= 2;
c /= 2;
// console.log(c)

// Comparison operator
var m = 10;
var n = 20;
// console.log(m == n);
// console.log(m >= n);
// console.log(m <= n);
// console.log(m > n);
// console.log(m < n);

// Logical operator

// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && false)
// console.log(false && false)

// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
// console.log(!true)
// console.log(!false)

// Function in javascript
//DRY= Do not Repeat Yourself
function avg(a, b){
   return(a + b)/2;
}
c1 = avg(7, 7);
c2 = avg(9, 9);
// console.log(c1, c2);

//Conditionals in javascript
// Single if statement
var age = 21;
// if(age > 18){
//     console.log("You can drive")
// }

//if - else statement
var age = 21;
// if(age > 21){
//     console.log("You can drive")
// }
// else{
//     console.log("You cann't drive")
// }

/*
var age = 22
// If - else ladder
if(age > 29){
    console.log("You are no more in twenties")
}
else if(age > 25){
    console.log("You are ready for marriage")
}
else if(age > 23){
    console.log("You are no more UG student")
}
else{
    console.log("You are not teenager")
}
console.log("End the ladder")
*/

// Loops in javascript
var arr = [1,2,3,4,5,6,7]
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
     for(var i=0;i<arr.length;i++){
        console.log(arr[i]);
    }

    const variable1 = 20;
    const variable2 = '40';
    const resultVariable = variable1 + variable2;
    console.log(resultVariable);
    console.log(typeof 20);
    console.log(typeof '40');

    const ObjectVariable = {
        property1: 'i am property1',
        property2: 'i am property2',
        property3: [20, 30, 40]

    };
    console.log(ObjectVariable.property3[2]);      //dot notation
    console.log(ObjectVariable['property3'][2]);   //bracket notation

    // const myArray = [20, 30, 40];
    // console.log(myArray[2]);
    