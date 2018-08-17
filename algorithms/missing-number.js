const expect = require('expect');

// Print missing number from an array that contains 1 to 100
const missingNumber = (arr) => {
  arr = arr.sort((a,b) => a - b);
  if (arr[0] !== 1) {
    return 1;
  }

  // [1, 2, 4, 5]
  for (let i = 1; i <= arr.length; i++) {
    if (i === 100) {
      return 0;
    } else if (arr[i] !== arr[i - 1] + 1) {
      return i + 1;
    }
  }
};

describe('Missing number from array', () => {
  it('should print the missing number in array', () => {
    expect(missingNumber([2,5,4,1])).toBe(3);
    expect(missingNumber([2,5,4,1,3])).toBe(6);
  });
  it('should print 0 for a completed array', () => {
    let foo = new Array(100);
    for(var i=0;i<foo.length;i++){
      foo[i] = i + 1;
    }

    expect(missingNumber(foo)).toBe(0);
  });
});

// let foo = new Array(100);
// for(var i=0;i<foo.length;i++){
//   foo[i] = i + 1;
// }
// console.log(missingNumber(foo));
// console.log(missingNumber([2,5,4,1]));
// console.log(missingNumber([2,5,4,1,3]));
