const expect = require('expect');

// (10,20)  => 5
const greatestCommonDivisor = (a = Math.abs(a), b) => {
  if (!a || !b) {
    return -1;
  }
  a = Math.abs(a);
  b = Math.abs(b);

  let smallNum = a < b ? a : b;

  for (let i = smallNum; i > 0; i--) {
    if (a % smallNum === 0 && b % smallNum === 0) {
      return smallNum
    }
  }
  return 1;
};

// console.log(greatestCommonDivisor(-2, -10));

describe('Greatest Common Divisor', () => {
  it('should return GCD of 10 for [10,20]', () => {
    expect(greatestCommonDivisor(10, 20)).toBe(10);
  });

  it('should return GCD of 2 for [-2 ,10]', () => {
    expect(greatestCommonDivisor(-2, 10)).toBe(2);
  });

  it('should return -1 for GCD with a 0 parameter of 0', () => {
    expect(greatestCommonDivisor(-2, 0)).toBe(-1);
  });

});
