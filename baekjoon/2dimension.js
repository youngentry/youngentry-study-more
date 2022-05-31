const rows = 5;
const columns = 6;
const array = [];

for (i = 0; i < rows; i++) {
  array[i] = [];
  for (j = 0; j < columns; j++) {
    array[i][j] = j;
  }
}

console.log(array);
