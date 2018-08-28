

// O(n log n)
const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let middleIndex = Math.floor(arr.length/2);
  let leftArray = arr.slice(0, middleIndex);
  let rightArray = arr.slice(middleIndex);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArray, rightArray) => {
  let leftIndex = 0;
  let leftLength = leftArray.length;
  let rightIndex = 0;
  let rightLength = rightArray.length;
  let mergedArray = [];

  while (leftIndex < leftLength && rightIndex < rightLength) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      mergedArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }
  return mergedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
};


let arr = [3,6,1,0, 9,7,8,5]; //[0,1,3,5,6,7,8,9]
console.log(mergeSort(arr));
