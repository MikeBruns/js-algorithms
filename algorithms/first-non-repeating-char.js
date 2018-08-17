const expect = require('expect');

const firstNonRepeatingChar = (str) => {
  str = str.toLowerCase();
  let usedChars = {}; // {w: 3, o, 3, }
  let char = '';
  for (let i = 0; i < str.length; i++) {
    char = str[i];
    if (char !== ' ') {
      // usedChars[char] = usedChars[char] ? usedChars[char] + 1 : 1;
      if (usedChars[char]) {
        usedChars[char] = usedChars[char] + 1;
      } else {
        usedChars[char] = 1;
      }
    }
  }

  for (let key in usedChars) {
    if (usedChars.hasOwnProperty(key) && usedChars[key] === 1) {
      // console.log(`key: ${key} | value: ${usedChars[key]}`);
      return key;
    }
  }
  return 'ya got nothing kid';

};

describe('First non repeating char in a string', () => {
  it('should return the first non repeating char', () => {
    expect(firstNonRepeatingChar('wow what a doozy')).toBe('h');
  });

  it('should return no non repeating chars', () => {
    expect(firstNonRepeatingChar('woooooooooooooow')).toBe('ya got nothing kid');
  });
});
