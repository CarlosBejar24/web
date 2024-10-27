/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/

var sieve = function (n) {
  "use strict";

  var array = [], // Array para marcar números como no primos
    primes = [], // Array para almacenar los números primos
    i,
    j;

  // Inicializa el array con `true`, asumiendo que todos los números son primos
  for (i = 2; i <= n; i++) {
    array[i] = true;
  }

  // Implementación del Criba de Eratóstenes
  for (i = 2; i <= Math.sqrt(n); i++) {
    if (array[i]) {
      // Marca como no primos los múltiplos de `i`
      for (j = i * i; j <= n; j += i) {
        array[j] = false;
      }
    }
  }

  // Todos los números que quedaron como `true` son primos
  for (i = 2; i <= n; i++) {
    if (array[i]) {
      primes.push(i);
    }
  }

  return primes;
};

// Función para mostrar los primos en el HTML
function displayPrimes() {
  var num = document.getElementById("num").value;
  var primes = sieve(num);
  document.getElementById("primes").textContent = primes.join(", ");
}
