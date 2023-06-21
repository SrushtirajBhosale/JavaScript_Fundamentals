// // 1.type coersion🔥🔥🔥
// let num = 5 + '5' -5 + '5';

// console.log(num);
// console.log(typeof num);

// // 2.convert to object from key/value pair of array🔥🔥🔥
// const arrData = (arr) => {
//     return Object.fromEntries(arr)
// }

// console.log( arrData([
//     ['a', 1],
//     ['b', 2],
//     ['c', 3],
//     ['d', 4] ]) 
// );

// // return an array of key/value pair from object
// function objData(obj) {
//     console.log(Object.entries(obj)); 
//     // console.log(Object.entries( {name: "sr7", age: 22, indian: true } ));   //or without params & args
// }

// objData( 
//     { name: "sr7",
//       age: 22,
//       indian: true } 
// );

// // 3.remove null & undefined properties from object🔥🔥🔥
const obj = {
    a: 1,
    b: null,
    c: undefined,
    d: 'yo'
}

// // 1 -> obj to array
// // 2 -> filter
// // 3 -> array to obj
// const obj1 = Object.entries(obj);
// console.log(obj1);
// obj1.splice(1,2);
// console.log(obj1);
// console.log(Object.fromEntries(obj1));

// const newObj = Object.fromEntries(Object.entries(obj).filter(([_, val]) => val != null));
// // for multiple objs preferable 
// // 1 -> obj to array
// // 2 -> filter
// // 3 -> array to obj
// console.log(newObj);


// // 4.find smallest & largest element in array
// const arr = [55, 33, 77, 11];
// arr.sort(function fun1 (a , b) {                  //line 81***
//     return (a - b);
// })

// console.log(arr);
// console.log(arr[0]);                   //smallest
// console.log(arr[arr.length - 1]);      //largest

// // or

// const getElem = (arr) => {
//     return arr.reduce((smallestNum, num) => Math.min(smallestNum, num));
//     // return arr.reduce((largestNum, num) => Math.max(largestNum, num));
// }
// console.log(getElem(arr));


// // 5.merge, sort & remove duplicate element from array
// const arr1 = [3, 8, 4, 7, 4];
// const arr2 = [2, 11, 5, 6, 9, 5];

// // const arr3 = ([...arr1, ...arr2])   //or
// let arr3 = (arr1.concat(arr2))
// arr3.sort((a, b) => (a-b));
// arr3 = [...new Set(arr3)]
// console.log(arr3);


// // 6. swap two number with/without third variable
// let arr = [10, 20, 30 , 40, 50];
// // const [arr1, arr2, arr3, arr4, arr5] = arr;   //destructuring
// const [arr1, arr2, ...arr3] = arr;            //rest opr
// // console.log(arr1, arr2);
//old way to swap
// let num1 = 77;
// let num2 = 99;
// let temp = num1;
// num1 = num2;
// num2 = temp;
// console.log(num1, num2);     //99 77  
// //without 3rd opr
// [num1, num2] = [num2, num1];
// console.log(num1, num2);    //back to 77^ 99^ swapped above code

// // 7.reverse integer number
// let int = 120;   //120 -> 21
// console.log(parseInt(revNum));
// let int = -123;
// let revNum = int.toString().split("").reverse().join("");
// if(revNum.endsWith('-')) {
//     revNum =  '-' + revNum;
//     console.log(parseInt(revNum));
// } else {
//     console.log(parseInt(revNum));
// }


// 8.find prime or composite number
let num = 7;
var isPrime = true;
for( i = 2; i < num; i++ ) {
    if (num % 2 == 0 || num % 3 == 0) {
        isPrime = false;
    }
}

if(num <= 1) {
    isPrime = false;
}

if(num ==2 || num == 3) {
    isPrime = true;
}

if (isPrime == true) {
    console.log(`${num} is a prime number`);
} else {
console.log(`${num} is not a prime number`);       
}