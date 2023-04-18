const [fixed, flex, cost] = require("fs")
  .readFileSync("./baekjoon/devstdin")
  .toString()
  .split(" ");

let breakEven = 0;
let flexibleCost = Number(cost) - Number(flex);
let i = 0;
let totalCost = Number(fixed) + flexibleCost * 1;

console.log(totalCost);

if ()

while (Number(totalCost) > Number(flexibleCost) * i) {
  i += 1;
}

console.log(i);
