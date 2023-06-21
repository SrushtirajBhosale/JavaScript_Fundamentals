console.log('Namaste');

// shadowing
// function shadow() {
//     let a = 7;

//     if(true) {
//         let a = 11;
//         console.log(a);
//     }

//     console.log(a);
// }

// shadow();

// Illegal shadowing
// function illShadow() {
//     var a = "Hi";
//     let b = "Bye";

//     if(true) {
//         let a = "Hello";        //Block scope
//         var b = "GoodBye";      //Not block scope/function scope
//         console.log(a);
//         console.log(b);
//     }

//     console.log(a);
//     console.log(b);
// }

// illShadow();


var a = 7;
a= 11;
var a = 17;
console.log(a);

let b = 9;
b = 13;
// can't re-declare
console.log(b);

const c = 15;
// can't re-assign
// can't re-declare
console.log(c);
