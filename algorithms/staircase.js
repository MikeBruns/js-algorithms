// https://www.hackerrank.com/challenges/staircase/problem
// print right aligned hashes on a new line with the specified number

// Example: This is a staircase of size n = 4:
//    #
//   ##
//  ###
// ####

function staircase(n) {
  // Write your code here
  if (!Number.isInteger(n) || n < 1 || n > 100) {
    console.log("Invalid number. Must be 1-100.");
    return;
  }

  // Each line
  for (let lineNum = 1; lineNum <= n; lineNum++) {
    let line = "";

    // Each character
    for (let charPos = 1; charPos <= n; charPos++) {
      // l1 = p6
      // l2 = p5 & p6
      if (n - lineNum < charPos) {
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

function staircaseUsingFunctions(n) {
  if (!Number.isInteger(n) || n < 1 || n > 100) {
    console.log("Invalid number. Must be 1-100.");
    return;
  }

  for (let lineNum = 1; lineNum <= n; lineNum++) {
    const spaces = n - lineNum;
    const hashes = n - spaces;
    let line = `${" ".repeat(spaces)}${"#".repeat(hashes)}`;

    console.log(line);
  }
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  staircaseUsingFunctions(n);
}
