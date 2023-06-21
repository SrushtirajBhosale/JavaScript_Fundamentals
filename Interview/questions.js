console.log("Namaste");

// function resultAll(arr) {
//     let result = 0;
//     for (let k = 0; k < arr.length; k++) {
//         for (let m = 0; m < arr[k].length; m++) {
//             if(arr[k][m] %2 == 0) result+=(arr[k][m])
            
//         }
        
//     }
//     return result;
// }

// console.log(resultAll([[1,2],[3,4],[5,6,7]]));
const s = document.getElementById("demo");
// s.innerHTML = resultAll([[1,2],[3,4],[5,6,7]])

var count = 0;

function cc(card) {
  // Only change code below this line

  var msg = '';

  switch (card) {
    case 2:
    case 3:
    case 4:
      count++;
      break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      count = count;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
      count--;
      break;
    case "A":
      count-= 2;
      break;
  }

  if (count === 5) msg = "5 Bet";
  else if (count === 0) msg = "0 Hold";
  else if (count === -5) msg = "-5 Hold";
  else if (count === -1) msg = "-1 Hold";
  else if (count === 1) msg = "1 Bet";
  else if (count === -2) msg = "-2 Hold";



  return msg;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
// cc(2); cc(3); cc(7); cc('K'); cc('A');

// s.innerHTML = cc(5);    
// s.innerHTML = cc(6);
// s.innerHTML = cc(7);
// s.innerHTML = cc('k');
// s.innerHTML = cc('A');

// s.innerHTML = cc(3);    
// s.innerHTML = cc(7);
// s.innerHTML = cc(5);
// s.innerHTML = cc(10);
// s.innerHTML = cc('A');

// s.innerHTML = cc(5);
// s.innerHTML = cc(6);
// s.innerHTML = cc('A');


// s.innerHTML = cc(5); cc(6); cc(7); cc('k'); cc('A');
// s.innerHTML = cc(5); cc(6); cc(7); cc('k'); cc('A');
// s.innerHTML = cc(5); cc(6); cc(7); cc('k'); cc('A');
// s.innerHTML = cc(5); cc(6); cc(7); cc('k'); cc('A');
// s.innerHTML = cc(3); cc(7); cc(5); cc(10); cc('A');
// s.innerHTML = cc(3); cc(7); cc(5); cc(10); cc('A');
// s.innerHTML = cc(3); cc(7); cc(5); cc(10); cc('A');