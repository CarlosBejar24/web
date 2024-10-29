/*
    Sieve of Eratosthenes - Finds all prime numbers up to a given limit `n`.
*/

function sieve(n) {
  var array = new Array(n + 1).fill(true); // Array to mark non-prime numbers
  var primes = [];

  array[0] = array[1] = false; // 0 and 1 are not prime numbers

  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (array[i]) {
      for (var j = i * i; j <= n; j += i) {
        array[j] = false;
      }
    }
  }

  for (var i = 2; i <= n; i++) {
    if (array[i]) {
      primes.push(i);
    }
  }

  return primes;
}

// Function to display primes in the HTML
function displayPrimes() {
  var num = parseInt(document.getElementById("num").value);
  if (isNaN(num) || num < 2) {
    document.getElementById("primes").textContent = "Please enter a number greater than 1.";
    return;
  }
  var primes = sieve(num);
  document.getElementById("primes").textContent = primes.join(", ");
}
