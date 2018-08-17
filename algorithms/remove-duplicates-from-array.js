
// [5, 1, 2, 3, 4, 3, 5, 1] => [5, 1, 2, 3, 4]
const removeDuplicatesEz = (noDupsPlease) => {
  let set = new Set(noDupsPlease);
  return [...set];
};

const removeDuplicatesHard = (noDupsPlease) => {
  let noDups = [];
  let value;
  for (var i = 0; i < noDupsPlease.length; i++) {
    value = noDupsPlease[i];
    if (!noDups.includes(value)) {
      noDups.push(value);
    }
  }
  //nifty array sorting trick
  noDups.sort((a,b) => {
    return a - b;
  });
  return noDups;
};

// console.log(removeDuplicatesEz([5, 1, 2, 3, 4, 3, 5, 1]));

// console.log(removeDuplicatesHard([5, 1, 2, 3, 4, 3, 5, 1]));
