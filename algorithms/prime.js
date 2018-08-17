const expect = require('expect');
const primeArray = require('./prime-numbers.js');
const mybigarray = primeArray.bigPrimeArray();

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  let divisor = 2;
  while (num > divisor) {
    if (num % divisor === 0) {
      return false;
    }
    divisor++;
  }
  return true;
};

// --------------------------------------------

const primeFactorsOf = (num) => {
  let primeFactors = [];
  let divisor = 2;

  while (num > 2) {
    if (num % divisor === 0) {
      primeFactors.push(divisor);
      num = num / divisor;
    }
    divisor++;
  }
  return primeFactors;
};

// --------------------------------------------

describe('Prime Numbers', () => {
  describe('Is a prime number', () => {
    it('should be a prime number', () => {
      for (let i =0; i<mybigarray.length; i++) {
        expect(isPrime(mybigarray[i])).toBe(true);
      }
    });

    it('should not be a prime number', () => {
      expect(isPrime(99)).toBe(false);
      expect(isPrime(4)).toBe(false);
    });
  });

  describe('Prime factors of a number', () => {
    it('should match prime nubmers', () => {
      expect(mybigarray).toIncludeKeys(primeFactorsOf(30));
      expect(primeFactorsOf(30)).toEqual([2,3,5]);

      expect(mybigarray).toIncludeKeys(primeFactorsOf(77));
      expect(primeFactorsOf(77)).toEqual([7,11]);
    });
  });
});
