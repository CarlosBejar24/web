/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This object will keep memory of the previous fibonacci numbers
var memo = {};

function fibonacci() {
  "use strict";
  var n = document.getElementById("num").value;
  var val = f(n);
  return val;
}


//Función recursiva 
function f(n) {
  var value;

  // Convert the input to an integer
  n = parseInt(n);

  // Check if the memory array already contains the requested number
  if (memo.hasOwnProperty(n)) {
    value = memo[n];
  } else {
    // Base cases for Fibonacci sequence
    if (n === 0) {
      value = 0;
    } else if (n === 1) {
      value = 1;
    } else {
      // Recursive case with memoization
      value = f(n - 1) + f(n - 2);
    }
    // Store the result in the memo object
    memo[n] = value;
  }

  return value;
}

// To test in the console
console.log(f(15));  // Output: 610
