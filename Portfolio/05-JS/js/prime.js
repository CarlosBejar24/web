var getPrimeFactors = function (n) {
  "use strict";

  function isPrime(n) {
    var i;
    if (n <= 1) return false;
    for (i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  var i,
    sequence = [];

  // Convert n to integer
  n = parseInt(n);

  // Check which numbers are factors of n and if that number is prime
  for (i = 2; i <= n; i++) {
    while (n % i === 0 && isPrime(i)) {
      sequence.push(i);
      n /= i;
    }
  }

  return sequence;
};

function displayPrimeFactors() {
  var num = document.getElementById("num").value;
  var factors = getPrimeFactors(num);
  document.getElementById("pf").textContent = "Prime factors: " + factors.join(", ");
}
