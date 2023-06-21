let result = document.getElementById("demo");
// loops can execute a block of code a number of times.
// loops are handy, if want to run same code over and over again, each time with a different value.

// 1. for loop,  2. for in loop, 3. for of loop,  4.while loop,  5. do/while loop. 6.Array.forEach().

//  1.for loop.
// let txt = "";
// for(let i = 0; i < 11; i++){
//     txt += i +"<br>";
// }
// result.innerHTML = txt;

// let i, text;
// for(i=0, text = ""; i <11; i++){
//     text += i +"<br>";
// }
// result.innerHTML = text;

const cars = ["Tata", "Mahindra", "Jeep", "Ford", "Audi", "BMW"]

// result.innerHTML = cars.length
// let txt = ""
// for(let i=0; i< cars.length;i++){
//     txt += cars[i] + "<br>";
// }
// result.innerHTML = txt;
// or 
// let i =0, txt="", L = cars.length;
// for(; i < L ; i++){
//     txt += cars[i] + "<br>";
// }
// result.innerHTML = txt;
// or
// let i =0, txt="", L = cars.length;
// for(; i < L ;){
//     txt += cars[i] + "<br>";
//     i++;
// }
// result.innerHTML = txt;

// let table = "";
// for(let i=5; i<51; i+=5){
//     table += i +"<br>";
// }
// result.innerHTML = table;



// 2.for in loop: 
// for (key in object){
//     // code block to be executed
// }
// loops through the properties of an object.
// const person = {
//     firstName: "Srushtiraj",
//     lastName: "Bhosale",
//     age: 22
// };
// let txt = "";
// for(let x in person){
//     txt += person[x] + "<br>";
// }
// result.innerHTML = txt;

// loop over the properties of an array.
// for (variable in array){
    //     // code block to be executed
    // }
const num = [1, 3, 7, 9, 11, 21, 77];
// let txt = "";
// for(let x in num){
//     txt += num[x] + "<br>";
// }
// result.innerHTML = txt;



// 6. Array.forEach(): method calls a function(a callback function) once for each array element.
// let txt = "";
// num.forEach(myFunction);
// function myFunction(value, index, array){
//     txt += value +  "<br>";
// }
// result.innerHTML = txt;

// above example only uses value parameter. it can be rewritten to:
// let txt = "";
// num.forEach(myFunction);
// function myFunction(value){
//     txt += value +  "<br>";
// }
// result.innerHTML = txt;



// 3.for of loop: loops through the values of the iterable objects.
// iterable data structure such as array, string, Maps, Nodelists & many more.
// for(varible of iterable){
//     // code block to be executed
// }

// looping over an array.
// let txt = "";
// for(let x of cars){
//     txt += x + "<br>";
// };
// result.innerHTML = txt;

let individual = "Srushtiraj";
//     let txt = " ";
//     for(let x of individual){
//         txt += x + "<br>";
// }
// result.innerHTML = txt;



// The while loop loops through block of code as long as specified codition is true.
// let i= 0;
// let txt = " ";
// while(i < 11){
//     txt += i + "<br>";
//     i++;
// }
// result.innerHTML = txt;



// setTimeout(() => {
//     console.log("123");
// }, 1000);

// for (let i = 1; i <= 10; i++) {
//     setTimeout(() => {
//     console.log(i);
//     }, i * 1000);
// }

function num() {
    for(let i = 1; i <=10; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
  }
  // num();
  
  function num() {
    for(var i = 1; i <=10; i++) {
        function close(i) {
            setTimeout(() => {
                console.log(i);
            }, i * 1000);
        }
        close(i)
    }
  }
  // num();
  
  function table(n) {
    let num ="";
    for(var i = 1; i <=10; i++) {
        function close(i) {
            setTimeout(() => {
                num = (i * n);
                console.log(num);
            }, i * 1000);
        }
        close(i)
    }
  }
  // table(7);


  