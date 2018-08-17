//find the nth number of the fibonacci sequence

// 0, 1, 1, 2, 3, 5, 8, 13, ...
//n: 5 = 5
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
