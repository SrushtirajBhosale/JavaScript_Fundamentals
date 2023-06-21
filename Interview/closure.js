// ******* function along it's lexical scope bundled together forms a closure.
function outer() {
  var a = 10;                 //lexical environment
    function inner() {
    console.log(a);
    }
    // inner();    // 1
    return inner;
}
// outer();               // 1
// outer()();
// or
var call = outer();
call();

// ******** 
// function outer() {
//     function inner() {
//         console.log(a);
//     }
//     var a = 10;
//     return inner;
    
// }
// let call = outer();
// call();      


// *********outer function nested inside outest function(closure)
function outest(c) {
    function outer(b) {
        function inner() {
            console.log(`${b} ${c} ${a} times🤩`);
        }
        // var a = 10;    //first of all it will find for 'a'; in lexical scope of it's parent, parents-parent and so on in hirarchy.
        //  if not, it will go to the global scope to access the 'a' & if there also 'a' is not present it will throw an refference error ' a is not defined'. 
        return inner;
        
    }
    return outer;
}
var a = 100;
outest("JavaScript")("Namaste")();
// or
// let call1 = outest("JavaScript")("Namaste");
// call1();