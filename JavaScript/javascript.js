const show = document.getElementById("start");
const result = document.getElementById("demo");

// **************** comment out from here**********************
function myName0(){
    show.innerHTML = "Namaskar world!"; //can change HTML;
    show.style.background= "orange";
    show.style.textAlign = "center";
    show.style.margin= "0px";
    // show.style.display = "none";
    show.style.padding= "15px";      //can change style(css);
}

function myName1(){
    alert("Namaskar Srushtiraj");
    show.innerHTML =prompt("Please enter your name:");
}

function myName2(){
    show.innerHTML =confirm("You entered: Srushtiraj") //shows boolean 
}
function myName3(){
    show.innerHTML = "Namaskar Srushtiraj";
}

// //JavaScript Where to:
// //betn <script></script> tag as a src or directly in <head></head> / bottom of the <body></body> 
// //always use in head with "defer" keyword.

console.log("Hey! there, it's srushtiraj here!");


// // Hoisting of variable & function: used variable before it is declared:
// myName = "Srushtiraj";
// show.innerHTML= myName;
// var myName;

// show.innerHTML= myN("Srushtiraj");
// function myN(value){
//     return value;
// }


// show.innerHTML= myName;
// var myName ="Srushtiraj";   //allocated memory as undefined for var 

// ****************comment out till here*******************


// coditionals:


    // const x = 77;
    // const guessNumber = prompt("Guess a number")
    // if(x == guessNumber){
    //     show.innerHTML= ("You guessed right!")
    // }else if(x > guessNumber){
    //     show.innerHTML=("Your guess is too low")
    // }else if(x < guessNumber){
    //     show.innerHTML=("Your guess is high")
    // }else{
    //     show.innerHTML=("You guessed wrong")
    // } 
    

    // const winningNumber = 19;
    // const userGuess = +prompt("Guess a number");
    // if(winningNumber === userGuess){
    //     console.log("Your guess is right!!");
    // }else{
    //     if(winningNumber > userGuess){
    //         console.log("Too low!");
    //     }else{
    //         console.log("Too high!!!");
    //     }
    // }

    
// setInterval(clock, 1000);
    
// function clock(){
//     let time = new Date();

//     result.innerHTML= time.getHours() + ":" +
//     time.getMinutes() + ":" +
//     time.getSeconds()
// }

// setInterval(clockWatch, 1000);

// function clockWatch(){
//     let count = 0;

//     result.innerHTML=  
// }