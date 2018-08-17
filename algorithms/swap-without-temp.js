const expect = require('expect');
//            a  b
// (3, 5) => [5, 3]
const swapWithoutTemp = (a, b) => {
  // + - % * /
  a = a + b; //a=-2 b=-5
  b = a - b; //a=-2 b=3
  a = a - b; //a=-5 b=3
  return [a, b];
};

// console.log(swapWithoutTemp(3, 5));

describe('swap without a temp variable', () => {
  it('should swap two numbers', () => {
    expect(swapWithoutTemp(3, 5)).toEqual([5, 3]);
    expect(swapWithoutTemp(3, -5)).toEqual([-5, 3]);
  });
});
