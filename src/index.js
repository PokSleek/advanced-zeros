/**
 * According topic "Finding Number of Trailing Zeros in Factorials"
 * http://mathforum.org/library/drmath/view/66749.html
 */

module.exports = function getZerosCount(number, base) {
  let minZeroCount = number;
  let primeFactors = [];
  let i = 2;

  while (i <= base) {
    if (base % i == 0) {
      primeFactors.push(i);
      base = base / i;
    } else {
      i++;
    }
  }

  for (let i = 0; i < primeFactors.length; i++) {
    let currentZeroCount = 0;
    let divider = primeFactors[i];
    let numberSamePrimes = 1;
    let pow = 2;
    while (divider < number) {
      currentZeroCount = currentZeroCount + Math.floor(number / divider);

      divider = Math.pow(primeFactors[i], pow);

      pow++;
    }

    while (primeFactors[i] == primeFactors[i + 1]) {
      numberSamePrimes++;
      i++;
    }

    currentZeroCount = Math.floor(currentZeroCount / numberSamePrimes);

    if (currentZeroCount < minZeroCount) {
      minZeroCount = currentZeroCount;
    }
  }

  return minZeroCount;
};
