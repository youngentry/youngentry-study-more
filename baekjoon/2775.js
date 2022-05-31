const input = require("fs")
  .readFileSync("./baekjoon/devstdin")
  .toString()
  .split("\n")
  .map((x) => x.trim());

let array = [];

for (i = 0; i < input[0]; i++) {
  let count = 0;
  let columns = input[2 * i + 1];
  let rows = input[2 * i + 2];
  for (j = 0; j <= columns; j++) {
    array[j] = [];
    console.log(array);
    for (l = 0; l < rows; l++) {
      if (j == 0) {
        count++;
        array[j][l] = count;
      }
      if (j >= 1) {
        if (l == 0) {
          array[j][l] = 1;
        } else {
          array[j][l] = array[j - 1][l] + array[j][l - 1];
        }
      }
    }
  }
  console.log(array);
  // console.log(array[columns].slice(-1)[0]);
}
