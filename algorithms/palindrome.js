const expect = require('expect');

const checkForPalindromeEz = (str) => {
  return str === str.split('').reverse().join('');
};

const checkForPalindromeHard = (str) => {
  // let rev = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   rev += str[i];
  // }
  // console.log(rev);
  // return rev === str;

  let length = str.length - 1; //2
  for (let i = 0; i < str.length / 2; i++) { //< 2.5
    if (str[i] === str[length]) {
      length--;
    } else {
      return false;
    }
  }
  return true;
}

describe('Palindrome', () => {
  it('should be a palindrome', () => {
    expect(checkForPalindromeEz('wolow')).toBe(true);
    expect(checkForPalindromeHard('wolow')).toBe(true);
  });

  it('should not be a palindrome', () => {
    expect(checkForPalindromeEz('speedy')).toBe(false);
    expect(checkForPalindromeHard('speedy')).toBe(false);
  });
});
