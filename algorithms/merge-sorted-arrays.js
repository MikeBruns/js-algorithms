const expect = require('expect');

const mergeSortedArrayEz = (a, b) => {
  // let c = [...a, ...b];
  return a.concat(b).sort((x, y) => {
    return x - y;
  });
};

const mergeSortedArrayHard = (a, b) => {
  let merged = [];
  let sumLength = a.length + b.length;
  let aSpot = 0;
  let bSpot = 0;
  for (var i = 0; i < sumLength; i++) {
    if (a[aSpot] <= b[bSpot]) {
      merged.push(a[aSpot]);
      aSpot++;
    } else {
      merged.push(b[bSpot]);
      bSpot++;
    }
  }
  return merged
};

// --------------------------------------------

describe('Merge Sorted Array', () => {
  it('should merge 2 sorted arrays', () => {
    expect(mergeSortedArrayEz([1,2,5,6,9], [1,2,3,29])).toEqual([ 1, 1, 2, 2, 3, 5, 6, 9, 29 ]);
    expect(mergeSortedArrayHard([1,2,5,6,9], [1,2,3,29])).toEqual([ 1, 1, 2, 2, 3, 5, 6, 9, 29 ]);
  });
});
