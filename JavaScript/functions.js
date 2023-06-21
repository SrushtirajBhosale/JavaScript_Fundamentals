// ***why function?
// >>>
// You can reuse code: Define the code once, and reuse it many times.
// You can use the same code many times with diffrent arguements, to produce diffrent results.

const result = document.getElementById("demo");

// 1.
function  product(p1,p2){ 
    return p1*p2;
}
result.innerHTML = product(7,3);


// 2.
// function toCelcius(fahrenheit){
//     return (5/9)*(fahrenheit - 32)
// }
// result.innerHTML = toCelcius(77);

// same example by using fat arrow function.
// toCelcius = (fahrenheit) => (5/9) * (fahrenheit - 32);
// result.innerHTML = toCelcius(77);

//or
// const temp = (fahrenheit) => (5/9) * (fahrenheit - 32);
// result.innerHTML = temp(77);



//*** 
// Hoisting is the phenomenon in which function or variables can be used, before it has been declared (see below Ex.).
// 1. function
// const temp = "The temperature is " + toCelcius(77) + "°C";
// // const temp = `The temperature is ${toCelcius(77)}°C`;          
// result.innerHTML = temp;
// function toCelcius (f){
    //     return (5/9)*(f-32);
// }
    
// In arrow funtion & statement function hoisting doesn't work.
// 2. arrow function
// toCelcius = (f) => (5/9)*(f-32);
// const temp = "The temperature is " + toCelcius(77) + "°C";
// result.innerHTML = temp;

//function used as a variable value.
// 3.function statement.
// const fToD = function myFunction(f){
//                 return (5/9)*(f-32);
//             }
//     const temp = "The temperature is " + fToD(77) + "°C";
//     result.innerHTML = temp;
// **use function directly like ex.1, to reserve memory space 
// (instead of using varible to store a function value).


//variables declared within a function, become local to the function.
// local variables can only be accessed from within the function and not
// from outside.

// myFunction();
// function myFunction(){
//     let bikeName = "Unicorn";
//     result.innerHTML = typeof bikeName +  "<br>" + "<br>" +" The black beast is " +bikeName;
// }
// // result.innerHTML = typeof bikeName;
// // result.innerHTML = bikeName;



// funtion expression can be stored in a vaiable.
// var x = function(a,b){
//     return a*b
// };
// result.innerHTML = x(7,3);
// The above function is actually an anonymous function.
// function stored in variables do not need funtion name,they are always invoked(called) by using varible name.



// functions can also be defined with built in javascript function constructor called Function().

// const myFunction = new Function ("a", "b", "return a*b");
// result.innerHTML = myFunction(7,3);



// function hoisting.
// myFunction(7);
// function myFunction(y){
//     return y*y
// }
// result.innerHTML = myFunction(7);



// self invoking functions(*function expression): Function can be invoked automatically without being called.
//  You have to add () around function to indicate it is a function expression.
// It will execute automatically if the expression is followed by ().

// (function(){
//     var str = "Self made Millionaire.";
//     result.innerHTML = str;
// })();
// The above function is anonumous self-invoking funtion.


// default parameter : if the function is called with missing argument, the misssing values are set to undefined. so it is better to assign a default value to the parameter.

// function myFunction(x,y){
//     if(y === undefined){
//         y=2;
//     }
//     return x*y;
// }
// result.innerHTML = myFunction(7);

// if y is not passed or undefined, then y = 7.
// function myFunction(x,y = 7){
//     return x*y;
// }
// result.innerHTML = myFunction(7);



// Function Rest Parameter: The rest parameter (...) allows a funtion to treat an indefinite number of arguments as an array.
// function sum(...args){
//     let x = 0;
//     for(let arg of args){
//         x += arg;
//     }
//     return x;
// }
// result.innerHTML = sum(11, 22, 33, 44, 55, 66);



// The arguments object: Javascript functions have built in objects called arguments object.
// argument object contains an array of the arguments used when the function was called.

// find highest value in the list of numbers.
// function findMax(){
//     let max = -Infinity;
//     for(let i = 0; i < arguments.length; i++){
//         if(arguments[i] > max){
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// result.innerHTML = findMax(1, 2, 5, 3, 7, 99, 55);

// function findMin(){
//     let min = Infinity;
//     for(let i= 0; i < arguments.length; i++){
//         if(arguments[i]<min){
//             min = arguments[i];
//         }
//     }
//     return min;
// }
// result.innerHTML = findMin(1000, 2000, 7000, 7, 1, -1, -99, -77);


// function to sum all input value.
// function sumAll(){
//     let sum=0;
//     for(let i =0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//     return sum;
// }
// result.innerHTML = sumAll(1, 2, 3, 7, 11, 55, 99, 111);


// Invoking function as a method.
// const myName = {
//     firstName: "Srushtiraj",
//     lastName: "Bhosale",
//     fullName: function(){
//         return this.firstName +  " " + this.lastName;
//     }
// }
// result.innerHTML = myName.fullName();

// Invoking function with function constructor.
// function myFunction(arg1, arg2){
//     this.firstName = arg1;
//     this.lastName = arg2;
// }
// const myObj = new myFunction("Srushtiraj", "Bhosale");
// result.innerHTML = myObj.firstName +" "+ myObj.lastName
