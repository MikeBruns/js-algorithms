//find the nth number of the fibonacci sequence

// O(2^n)
const fibonacciRecursive = (n) => {
  let fibonacciList = [0, 1];
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

// 0, 1, 1, 2, 3, 5, 8, 13, ...
//n: 5 = 5
// O(n)
const fibonacciNthValueOf = (n) => {
  let fibonacciList = [0, 1];
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  }

  for (let i = 2; i <= n; i++) {
    fibonacciList[i] = fibonacciList[i-2] + fibonacciList[i-1];
  }
  // console.log(fibonacciList);
  return fibonacciList[n];
};


console.log(fibonacciNthValueOf(6));
