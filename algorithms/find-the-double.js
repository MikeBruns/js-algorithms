import expect from 'expect';

// O(n)
const findTheDoubleUnordered = (arr) => {
  let usedNumbers = {}; // hold index for each value
  let num;
  for(let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (usedNumbers[num] !== undefined) {
      return usedNumbers[num];
    }
    usedNumbers[num] = i;
  }
  console.log(usedNumbers);
  return -1;
};

// console.log(findTheDoubleUnordered([8,3,1,2,4,7,8,8,10]));
// 3

// O(n)
const findTheDoubleOrdered = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    if (arr[i+1] && arr[i] === arr[i+1]) {
      return i;
    }
  }
  return -1;
};


// console.log(findTheDoubleOrdered([1,2,3,4,5,5,6,7,8,9,10]));
// 4

describe('Find the double in array', () => {
  describe('Unordered', () => {
    it('should return the index of the first duplicate in an unordered array', () => {
      expect(findTheDoubleUnordered([5,3,1,2,4,7,8,2,10])).toBe(3);
      expect(findTheDoubleUnordered([5,3,1,2,4,7,8,10,5])).toBe(0);
    });
    it('should return -1 for no reapeating values in array', () => {
      expect(findTheDoubleUnordered([5,3,1,2,4,7,8,10])).toBe(-1);
    });
  });
  describe('Ordered', () => {
    it('should return the index of the first duplicate in an ordered array', () => {
      expect(findTheDoubleOrdered([1,2,3,4,5,5,6,7,8,9,10])).toBe(4);
      expect(findTheDoubleOrdered([1,1,2,3,4,5,5,6,7,8,9,10])).toBe(0);
    });
    it('should return -1 for no reapeating values in array', () => {
      expect(findTheDoubleOrdered([1,2,3,4,5,6,7,8,9,10])).toBe(-1);
    });
  });
});
