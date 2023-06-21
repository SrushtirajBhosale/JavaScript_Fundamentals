const result = document.getElementById('demo');

const myObj = {
  fName: "Srushtiraj",
  lName: "Bhosale"
}
result.innerHTML = myObj.fName;

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
// class myFunction {
//     constructor(arg1, arg2) {
//         this.firstName = arg1;
//         this.lastName = arg2;
//     }
// }
// const myObj = new myFunction("Srushtiraj", "Bhosale");
// result.innerHTML = myObj.firstName +" "+ myObj.lastName

// with class constructor.
// class myFunction {
//     constructor(arg1, arg2) {
//         this.firstName = arg1;
//         this.lastName = arg2;
//     }
// }
// const myObj = new myFunction("Srushtiraj", "Bhosale");
// result.innerHTML = myObj.firstName +" "+ myObj.lastName



// call() method: with call() an object can use a method belonging to another object.


// const person = {
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// };

// const person1 = {
//     firstName: "Srushtiraj",
//     lastName: "Bhosale"
// };
// const person2 = {
//     firstName: "John",
//     lastName: "Doe"
// };
// result.innerHTML = person.fullName.call(person1);
// result.innerHTML = person.fullName.call(person2);

// call() method using agrument.

// const person = {
// fullName: function(dist, state){
//     return "Hey There! it's " + this.firstName + " " + this.lastName + " here from "+ dist + " district of " + state + ".";
//     }
// };
// const person1 = {
// firstName: "Srushtiraj",
// lastName: "Bhosale"
// };
// const person2 = {
// firstName: "John",
// lastName: "Doe"
// };
// result.innerHTML = person.fullName.call(person1, "\"Solapur\"", "Maharashtra");



// Javascript function apply(): you can write a method that can be used on diffrent objects. [same as call(); only diffrence is call() method takes arguments seperately, the apply() method takes it as an array.]

// const person = {
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// };

// const person1 = {
//     firstName: "Srushtiraj",
//     lastName: "Bhosale"
// };
// const person2 = {
//     firstName: "John",
//     lastName: "Doe"
// };
// result.innerHTML = person.fullName.apply(person1);
// result.innerHTML = person.fullName.apply(person2);


// const person = {
//     fullName: function(dist, state){
//         return "Hey There! it's " + this.firstName + " " + this.lastName + " here from "+ dist + " district of " + state + ".";
//     }
// };

// const person1 = {
//     firstName: "Srushtiraj",
//     lastName: "Bhosale"
// };
// const person2 = {
//     firstName: "John",
//     lastName: "Doe"
// };
// result.innerHTML = person.fullName.apply(person1, ["Solapur", "Maharashtra"]);
// result.innerHTML = person.fullName.apply(person2, ["Solapur",  "Maharashtra"]);



// simulate a max method on array. since arrays do not have a max method.
// result.innerHTML = Math.max(1, 2 , 3, 7);
// // for arrays: since arrays do not have a max method.You can apply the Math.max() method instead.
// result.innerHTML = Math.max.apply(null, [2 , 3, 7]);  //or
// result.innerHTML = Math.max.apply(Math, [2 , 3, 7]);
// result.innerHTML = Math.max.apply(" ", [2 , 3, 7]);
// result.innerHTML = Math.max.apply(0, [2 , 3, 7]);



// Javascript function bind():With bind() method, an object can borrow a method from another object.

// const myName = {
//         firstName: "Srushtiraj",
//         lastName: "Bhosale",
//         fullName: function(){
//             return this.firstName +  " " + this.lastName;
//         }
// };
// const person = {
//     firstName: "John",
//         lastName: "Doe"
// };
// result.innerHTML = myName.fullName.bind(person)();  
//  //or
// let fullName= myName.fullName.bind(person);
// result.innerHTML = fullName(); 


// This example display the myName after 3 seconds.
// const myName = {
//     firstName: "Srushtiraj",
//     lastName: "Bhosale",
//     fullName: function(){
//         result.innerHTML =  this.firstName +  " " + this.lastName;
//     }
// };
// const person = {
// firstName: "John",
//     lastName: "Doe"
// };
// let fullName= myName.fullName.bind(person);
// setTimeout(fullName, 3000); 