let str1 = 'wow';
console.log(str1.split(""));
// console.log(str1.split("").reverse());
// console.log(str1.split("").join() === str1.split("").reverse().join())

function anagram(str1) {
  ( str1.split("").join() === str1.split("").reverse().join() ) ? (
    console.log("given string is anagram") ) : (
  console.log("not a anagram") );
}

// anagram('wow');
// anagram('yoo');




// sorting array of numbers  vs string
let arr1 = [1, 11, 3, 5, 7, 2]
arr1.sort((a, b) => (a -b));
// console.log(arr1);

let arr2 = ['mango', 'orange', 'apple', 'banana'];
arr2.sort();
// arr2.sort().reverse();
// console.log(arr2);

// sort actual string
let str2 = "srushtiraj"
// console.log(str2.split("").sort());