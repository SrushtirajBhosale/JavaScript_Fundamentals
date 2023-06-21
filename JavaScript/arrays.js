//👉👉👉Arrays🔥🔥🔥
// when we have to store multiple values in a single variable, use array.
// In Array we can store multiple value in one variable.
// In JavaScript, we have an array class & arrays are the prototype of this class.

// Traverse of an array
// Searching & filtering in an array 
// How to sort & compare an array
// How to insert, add, replace & delete element in array(CRUD)
//👉 Map(🎈),Reduce(🎈),Filter(🎈)

const names = ['Srushtiraj', 'Vidyut', 'John', 'Mahesh', 'Dhanush'];
// console.log(names);
// console.log(names[0]);                //Lower index/Lower boundary
// console.log(names.length);
// console.log(names[names.length-1]);  //Upper index/Upper boundary

// // If we want all data back to back
// // 🔥🔥for loop🔥🔥
// debugger;
// for(let i =0; i<names.length; i++){
//     // console.log(i);             //It provides index of elements as a number
//     console.log(names[i]);
// }

// // After ES6 we have for..in and for..of loop
// // 🔥🔥for..in loop🔥🔥
// debugger;
// for(let i in names){             //It takes index as a value in 
//     // console.log(i);           //It provides index of elements as a string
//     console.log(names[i]);
// }

// // 🔥🔥for..of loop🔥🔥
// debugger;
// for(let i of names){             
//     console.log(i);             
// }

// 🔥🔥forEach()🔥🔥
// Calls a function for each element in the array.
// names.forEach( (value, index, array) => console.log(`${index}. ${value}`) );   //can give index & array also
names.map((value, index, array) => console.log(`${index}. ${value}`) );




const result = document.getElementById('demo');

// 1.
const cars = ['Tata', 'Mahindra', 'Audi'];
// result.innerHTML = cars;

// 2.
// result.innerHTML = cars[0];

//   *****Iteration over every array element*****
// 3.  *Array.forEach()*
// let elements = '';
// cars.forEach(myElement);
// result.innerHTML = elements;
// function myElement(value){
//     elements += value + '<br>';
// }

// same as above
// const cars1 = ['Tata-Harrier', 'Mahindra-Thar', 'Audi-R8 V10'];
// cars1.forEach(myElement);
// function myElement(value){
//     result.innerHTML += value +'<br>';
// }

// same as above.
// cars.forEach(function(car){
//     result.innerHTML += car + '<br>'
// });

// same as above
// cars.forEach((cars) => result.innerHTML += cars + '<br>');
// // or
// cars.forEach((value) => result.innerHTML += value + '<br>');

// const cars1 = ['Tata-Harrier', 'Mahindra-Thar', 'Audi-R8 V10'];
// cars1.forEach(myElement);
// function myElement(value, index, array){
//     result.innerHTML += '<br>(Index),' + index + '.<br>(Value of Element),' + value + ' <br>(Array), ' + array +'<br>';
// }



// .For loop
// For loop
// let elements = "";
for(let i =0; i < cars.length; i++){
    result.innerHTML += cars[i] + '<br>';
    // or
    // elements += cars[i] + '<br>';
}
// result.innerHTML = elements;