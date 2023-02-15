// literals => literally
// apa yang dituliskan akan ditampilkan
/**
 * A     = 1
 * B     = 2
 * A + B = 3
 */
const a = 1;
const b = 2;
console.log("A     = " + a + "\nB     = " + b + "\nA + B = " + (a + b));
function add(num1, num2) {
  return num1 + num2;
}
console.log(
  `A    = ${a}
B    = ${b}
A+B  = ${add(a, b)}`
);
