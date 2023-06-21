// fun1();                             //syncronous programm

// function fun1(){
//     console.log('fun1 started');
//     fun2();
//     console.log('fun1 end');
// }

// function fun2(){
//     console.log('fun2 started')
// }
// or
// we can also use ES6 arrow function.but define function before calling Bcoz hoisting not works on arrow, anonymous function & function expression.

// const fun2 =() => {
//     console.log('fun2 started')
// }

// const fun1 = () => {
//     console.log('fun1 started');
//     fun2();
//     console.log('fun1 end');
// }

// fun1();


// Asynchronous method.
const fun2 =() => {
    setTimeout(() =>{
        console.log('fun2 started');
    }, 3000);
}

const fun1 = () => {
    console.log('fun1 started');
    fun2();
    // setTimeout(fun2, 5000);                   //or
    console.log('fun1 end');
}

fun1();