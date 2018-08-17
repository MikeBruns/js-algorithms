const expect = require('expect');

const reverseString = (s) => {
  let stringToReturn = '';
  for (let i = s.length - 1; i >= 0; i--) {
    stringToReturn += s[i];
  }
  return stringToReturn;
};

// console.log(reverseString('go reds'));

describe('Reverse string', () => {
  it('should reverse a string', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
    expect(reverseString('go redlegs')).toBe('sgelder og');
  });
});
