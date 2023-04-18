const input = Number(require("fs").readFileSync("devstdin").toString());

let count = 0;
let startNumber = input;

while (true) {
  count++;
  let plusNum = (Math.floor(startNumber / 10) + (startNumber % 10)) % 10;
  let newNum = String(startNumber % 10) + String(plusNum);
  startNumber = newNum;
  if (startNumber == input) {
    console.log(count);
    break;
  }
}