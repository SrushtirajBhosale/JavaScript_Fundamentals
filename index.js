console.log('Namaste🔥🔥🔥');

// Data type: stores data values in variableName.
// syntax: variable variableName = value;     // key:value pair.

const myName = 'Srushtiraj';                   //1️⃣String
console.log(myName);
console.log(typeof(myName));

const myAge = 22;                              //2️⃣Number
console.log(myAge);
console.log(typeof(myAge));

const amIGraduate = true;                         //3️⃣Boolean
console.log(amIGraduate);
console.log(typeof(amIGraduate));

var y;                                         //4️⃣undefined
console.log(y);                  

var x = null;                                  //5️⃣null
console.log(x);
console.log(typeof(x));                        //6️⃣bug in javascript*

// for validation;
console.log(isNaN(myAge));                    
console.log(isNaN(myName));
//  eg. we can suggest user to fill valid details.
if(isNaN('12abcd7890')){
    console.log('Please enter valid phone no.');
}

console.log(10 + "20");              // type coercion
console.log(9 - "5");
console.log("Java" + "Script");
console.log(" " + " ");
console.log(" " + 0);                // convert to string
console.log("xyz" - "abc");
console.log(true + true);
console.log(true - false);
console.log(false + true);
console.log(false - true);

// Expression: combination of operands(either literals or variables) and operator.
// operator:
// 1️⃣assingment operator(=).
console.log('Namaste🔥🔥🔥');
const a = 7;
const b = 7;
console.log('is a and b are equal: ' + a==b);
console.log(`is a and b are equal: ${a==b}`);

// 2️⃣Arithmatic operator(+, -, *, /, %);
console.log('Namaste🔥🔥🔥');
console.log(5+3);
console.log(5-3);
console.log(5*3);
console.log(5/3);
console.log(5%3);

// increament ~/decreament 
let num = 7;               
console.log(num);
let newNum = num++;        //postfix increament
console.log(num);
console.log(newNum);

let num1 = 7;
console.log(num1);
let newNum1 = ++num1;        //prefix increament
console.log(num1);
console.log(newNum1);

// 3️⃣Comparison operator
console.log('Namaste🔥🔥🔥');
const c = 20;
const d = 20;
console.log(c==d);     //equal value
console.log(c===d);    //equal value and equal type
console.log(c!=d);
console.log(c>d);
console.log(c>=d);
console.log(c<d);
console.log(c<=d);

// 4️⃣Logical operator(&&, ||, !)And, Or, Nor.
console.log('Namaste🔥🔥🔥');
const e = 7;
const f = -7;
console.log(e>f && f<0);
console.log(e>f && f<0 && f>0);
console.log(e>f || f>0);
console.log(e>f && f>0 || f<0);

console.log((e>f) && !(f>0));
console.log(!((e>f) && !(f>0)));

// 5️⃣String operator
console.log('Namaste🔥🔥🔥');
const myString = "Namaste JavaScript"
console.log(myString);
console.log(myString + " & Namaste Srushtiraj");
console.log('Namaste JavaScript ' + '& Namaste Bappa');

// 6️⃣Ternery operator
console.log('Namaste🔥🔥🔥');
var yourAge = 22;              //🔥Short version of if-else statement🔥
var age = (yourAge>=18)? "Yes you can vote": "No you can't vote";
console.log(age);
//



//7️⃣Exponential operator
console.log('Namaste🔥🔥🔥');
console.log(7**2);    //7*7

//🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈 challenge:🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈
// swap two numbers:
var l = 1;
var m = 2;

var n = l;      //n=1
l = m;          //l=2
m = n;          //m=1
console.log(l);
console.log(m);
// swap without using third variable
var l = 5;
var m = 7;
l = l + m;    //l=12
m = l - m;    //m=5
l = l - m;    //l=7
console.log(l);
console.log(m);


// 👉👉👉falsy and truthy values🔥🔥🔥
console.log('Namaste🔥🔥🔥');
// 5 falsy values are: 0, "", null, undefined, false.
if(false){
    console.log('we won');                   //becomes light if condition doesn't match
}else{
    console.log('we learnt lesson from it');
}



//👉👉👉Conditional Statement🔥🔥🔥

// 1️⃣if-else statement
// Whether if a given year is leap year or not.
console.log('Namaste🔥🔥🔥');
const year = 2400;
if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            console.log(`the ${year} will be leap year`);
        }else{
            console.log(`the ${year} will not be leap year`);
        }
        // console.log(`the ${year} will not be leap year`);
    }else{
        console.log(`the ${year} will be leap year`);
    }
    // console.log(`the ${year} will be leap year`);
}else{
    console.log(`the ${year} will not be leap year`);
}

// 2️⃣if else-if statement
console.log('Namaste🔥🔥🔥');
var area = 'circle';
var r=7, PI=3.14, length=5, breadth=10;
if(area == 'rectangle'){
    console.log(`area of ${area}: ${length*breadth} `);
}else if(area == 'triangle'){
    console.log(`area of ${area}: ${(length*breadth)/2}`);
}else if(area == 'circle'){
    // console.log(`area of ${area}: ${PI*(r**2)} `);   
    // or
    console.log('area of circle: ' + PI*r**2);
}else if(area == 'square'){
    console.log(`area of ${area}: ${length*length} `);
}else{
    console.log(`Enter the valid data`);
}

// 🔥👉👉Switch statement is alternative for if else-if statement🔥
// 3️⃣Swith statement:
console.log('Namaste🔥🔥🔥');
var area ='circle';
var r=7, PI=3.14, length=5, breadth=10;
switch(area){
    case 'square': console.log(`area of ${area}: ${length*length} `);
    break;
    // case 'circle': console.log(`area of ${area}: ${PI*(r**2)} `);
    // or
    case 'circle': console.log('area of circle: ' + PI*r**2);
    break;
    case 'rectangle': console.log(`area of ${area}: ${length*breadth} `);
    break;
    case 'triangle': console.log(`area of ${area}: ${(length*breadth)/2}`);
    break;
    default : console.log(`Enter valid data`);
}

//👉👉👉Loops🔥🔥🔥
console.log('Namaste🔥🔥🔥');
// 1️⃣While loop
var i = 7;                     // takes value
while(i<=10){                  // check if meets condition
    debugger;                  
    console.log(i);            // log it
    i++;                       // increament it & go back to check condition
}


// 2️⃣do while loop
var i = 1111;                  // take value
do{
    debugger;
    console.log(i);            // log it
    i++;                       // increament it & go to check condition
}while(i <= 10);               // check if meets condition


// 3️⃣for loop
for(let i=7;i<=10; i++){       //1.take value //2.check if meets condition, log it //4.(4🔗2)increament it and again check if meets condition
    debugger;
    console.log('Srushtiraj'); //3.(3🔗4) log it and again go to increament it
}

//🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈 challenge:🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈
//print table of given number:(7)
console.log('Namaste🔥🔥🔥');
for(let i =1; i<= 10; i++){
    console.log(7*i);
}


//👉👉👉Functions🔥🔥🔥
// 👉👉Why function: Define the code once & use it many times.
// You can use the same code many times with different arguements, to produce diff result
// or
// A function is a group of reusable code which can be anywhere in your program. this elimates the need of writing the same code again and again.

// function definition
// calling a function
// function parameter
// function arguement
// function expression
// return keyword
// anonymous function

// function definition (also known as function declaration or function statement).
console.log('Namaste🔥🔥🔥');
function addNum(a,b){        //parameters are listed in function definition
    total = a+b;
    console.log(total);
}
// defining a function does not execute it
// it is exeted when "something" envokes it (or calls it).
addNum(7,7);               //arguements are real values passed to function

//function expression/first class function : create a function and put it in the variable.
const addNums = function(a,b){        //anonymous function
    total = a+b;
    console.log(total);
}
addNums(9,9)

// Return value: return value is the value which is "returned" back to the "caller".
const addNumber = function(a,b){
    return total = a+b;
}
console.log(addNumber(11,11));

// self invoking
(function(a,b){
    total = a+b;
    console.log(total);
})(13,13);



//👉👉👉ECMAScript 2015 / ES6🔥🔥🔥
// 1️⃣let & const
// var => function scope          🔥🔥
// let & const => block scope     🔥🔥

// 🅰️var and let can be reassigned but not const:
console.log('Namaste🔥🔥🔥');
var no = 1;       
no = 2;            //can be reassign to var
console.log(no);
let no1 = 1;
no1 = 2;           //can be reassign to let
console.log(no1);
const no2 = 1;
// no2 = 2;      *It will give TypeError as assignment to constant variable
console.log(no2);

// 🅱️var can be redeclare but let and const are not:
console.log('Namaste🔥🔥🔥');
var aa = 1;
var aa = 2;
console.log(aa);
let bb = 1;
// let bb = 2;      SyntaxError: Identifier 'bb' has already been declared
console.log(bb);
const cc = 1;
// const cc = 2;    SyntaxError: Identifier 'cc' has already been declared
console.log(cc);

// C. var has function scope whereas let & const has block scope
console.log('Namaste🔥🔥🔥');
var aaa = "aa"
{
  var aaa = "aaa";
  console.log(aaa); //it does not have block scope, it will overwrite value
  let aaa = "aaaa"
//   console.log(aaa);  //Legal shadowing 
}
console.log(aaa);

let bbb = "bb";
{
    let bbb = "bbb";       //block scope
    console.log(bbb);
    // var bbb = "bbbb";      //Ilegal shadowing
    console.log(bbb);
  }
console.log(bbb);

const ccc = "cc";
{
    const ccc = "ccc";     //block scope
    console.log(ccc);
  }
console.log(ccc);

console.log('Namaste🔥🔥🔥');
function scope(){
    var p = 1;
    console.log(p);
    if(true){
        console.log(`inner function: ${p}`);
        var q = 2;
        console.log(`innermost condition: ${q}`);
    }
    console.log(`Outer condition: ${q}`);
}
scope();
// console.log(p);     can't acssess outside function scope🔥🔥🔥

function scope1(){
let p = 1;
    console.log(p);
    if(true){
        console.log(`inner function: ${p}`);
        let q = 2;
        console.log(`innermost condition: ${q}`);
    }
    // console.log(`Outer condition: ${q}`);    //can't accsess outside block scope.reference error q is not defined.
}
scope1();

function scope2(){
const p = 1;
    console.log(p);
    if(true){
        console.log(`inner function: ${p}`);
        const q = 2;
        console.log(`in condition: ${q}`);
    }
    // console.log(`Outer condition: ${q}`);    //can't accsess outside block scope.reference error q is not defined.
}
scope2();


// 2️⃣Template literals (Template strings):(`can write directly without concatenation and acssess variables in ${}`)
console.log('Namaste🔥🔥🔥');
for(let i=1; i<=10;i++){
    tableof = 11;
    console.log(`${tableof} * ${i} = ${tableof * i}`);
}

// 3️⃣Default parameters: default function parameter allows named parameter to be initialized with deault values if no value or undefined is passed.
console.log('Namaste🔥🔥🔥');
debugger;
function cal(a=7, b=11){
    debugger;
    return a*b;
}
console.log(cal(10,10));
console.log(cal(9));
console.log(cal());


// 4️⃣Arrow function
console.log('Namaste🔥🔥🔥');
const calculate = (a,b)=>{
    return a*b;
}
console.log(calculate(3,3));

// if there is single line of code then we can remove {} & return keyword
const calculate1 = (a,b) => a*b;
console.log(calculate1(3,3));