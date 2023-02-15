// Scope
// definisi => batasan dari sebuah variabel bisa dipanggil atau tidak

// jenis Scope
// 1. Global Scope => <es6
// 2. Local Scope  => <es6
// 3. Block Scope  => >=es6

// setiap scope dibungkus dengan {}

// Global Scope
// => variabel yang dideklarasikan bisa dipanggil dari manapun

// Local Scope
// => variabel yang dideklarasikan hanya bisa dipanggil dari scope tempat deklarasinya (fungsi)

// Block Scope
// => hanya bisa digunakan menggunakan const dan let, variabel yang dideklarasikan hanya bisa
// dipanggil dari scope tempat deklarasinya

const fullName = "fazztrack";
if (true) {
  console.log(fullName);
}
while (true) {
  console.log(fullName);
  break;
}
console.log(fullName);

if (true) {
  let iterator = 1;
  console.log(iterator);
}
// console.log(iterator);

for (let i = 0; i < 5; i++) {
  for (let i = 5; i > 0; i--) {
    console.log("inside", i);
  }
  console.log("outside", i);
}
// console.log("out loop", i);

const carName = "Kijang";
function car() {
  const carName = "Volvo";
  console.log(carName);
  // local scope variable > global scope variable
}
car();
console.log(carName);
