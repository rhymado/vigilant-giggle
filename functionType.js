// CALLBACK FUNCTION ================================
// fungsi yang dikirimkan sebagai parameter/argumen di fungsi lain
// fungsi ini akan digunakan di lain waktu

const welcomeGreet = (name) => {
  const welcome = `Selamat Datang ${name}`;
  return welcome;
};

const morningGreet = (name) => {
  const morning = `Selamat Pagi ${name}`;
  return morning;
};

// fungsi biasa
// console.log(welcome("Andre"));

const greetAllGuest = (callback) => {
  const guests = ["Budi", "Niki", "Karen", "Dona"];
  for (let guest of guests) {
    console.log(callback(guest));
  }
};

// const greetAllGuestMorning = (callback) => {
//   const guests = ["Budi", "Niki", "Karen", "Dona"];
//   for (let guest of guests) {
//     console.log(morningGreet(guest));
//   }
// };

// greetAllGuest(welcomeGreet);
// greetAllGuest(morningGreet);
// greetAllGuestMorning();

// METHOD ===============================================
// fungsi yang berada didalam object
this.brand = "Bugatti";
this.model = "Chiron";

const Car = {
  brand: "Koenigsegg",
  model: "Jesko",
  topSpeedInKph: 490,
  getFullNameDeclaration() {
    const fullName = `${this.brand} ${this.model}`;
    return fullName;
  },
  getTopSpeedInMph: function () {
    const result = this.topSpeedInKph * 0.6;
    return `${result} mph`;
  },
  //   getFullNameArrowFunc: () => {
  //     const fullName = `${this.brand} ${this.model}`;
  //     console.log(fullName);
  //     // Pada Arrow Function, behaviour this menunjuk pada
  //     // pembungkus dari object Car
  //   },
  getFullInfo() {
    const text = `${this.getFullNameDeclaration()} ${this.getTopSpeedInMph()}`;
    return text;
  },
};

// console.log(Car.getFullNameDeclaration());
// Car.getFullNameArrowFunc();
// console.log(Car.getTopSpeedInMph());
// console.log(Car.getFullInfo());

// KESIMPULAN: Pada penulisan Method, gunakan deklarasi atau ekspresi

// BUILT-IN METHOD ===================================================
// 1. Sort (array.sort)
// digunakan untuk mengurutkan elemen2 pada suatu array
// syntax: array.sort(cb)
// cb: logika pengurutan (asc or desc) => optional
// jika cb tidak diberikan, maka secara default akan diurutkan secara ascending
// berdasarkan tabel ascii (seperti kamus)
// sifat: mutasi

const numbers = [2, 5, 3, 4, 1];
// console.log("before", numbers);
// default sort
// const result = numbers.sort();
// asc/desc sort
// numbers.sort((a, b) => {
//   // <0, a < b
//   // 0, a = b
//   // >0, a > b
//   return b - a;
// });

// console.log("after", numbers);
// console.log("output", result);
// hasil dari sort tidak usah ditampung

// 2. Reverse (array.reverse)
// digunakan untuk membalik urutan suatu array
// syntax: array.reverse()
// sifat: mutasi

// console.log("before", numbers);
// const result = numbers.reverse();
// console.log("after", numbers);
// console.log("output", result);
// hasil dari reverse tidak usah ditampung

// 3. Split (string.split)
// digunakan untuk memisahkan elemen2 string menjadi elemen2 array
// string => array
// syntax: string.split(separator)
// separator: string
// jika separator tidak diberikan, maka akan membentuk array dengan 1 elemen
// sifat: non-mutasi

const str = "Fullstack Website Batch 14";
// console.log("before", str);
// default split
// const result = str.split();
// split with separator
// const result = str.split(" ")
// separator akan dihapus
// console.log("after", str);
// console.log("output", result);
// hasil dari split harus ditampung

// 4. Join (array.join)
// digunakan untuk menggabungkan elemen2 array menjadi string
// array => string
// syntax: array.join(separator)
// separator: string
// jika separator tidak diberikan, maka akan membentuk string dengan separator koma (,)
// sifat: non-mutasi

// const splittedString = str.split(" ");
// console.log("before", splittedString);
// default join
// const result = splittedString.join();
// join with separator
// const result = splittedString.join(" ");
// console.log("after", splittedString);
// console.log("output", result);
// hasil dari join harus ditampung

// 5. Push (array.push)
// menambahkan elemen baru pada suatu array di posisi paling belakang
// syntax: array.push(...elemen)
// elemen: various type
// sifat: mutasi
// output: panjang array terbaru

// console.log("before", numbers);
// const result = numbers.push(
//   10,
//   false,
//   "hello",
//   { name: "Fazztrack" },
//   [1, 2, 3],
//   function () {
//     return "Hello World";
//   }
// );
// console.log("after", numbers);
// console.log("output", result);
// hasil dari push bisa ditampung jika dibutuhkan

// 6. Map (array.map)
// untuk melakukan treatment kepada seluruh elemen array
// melakukan iterasi untuk seluruh elemen array
// syntax: array.map(cb)
// cb: (value, index, array) => {}
// cb harus mereturnkan elemen terbaru
// sifat: non-mutasi

// console.log("before", numbers);
// const result = numbers.map(function (number, idx, array) {
// //   array: array yang sedang di map
//     console.log(array);
//     if (number % 2 === 0) {
//       return "Genap";
//     } else {
//       return "Ganjil";
//     }
// //   elemen di idx genap dikali 3
// //   elemen di idx ganjil dikali 5
//     if (idx % 2 === 0) {
//       return number * 3;
//     } else {
//       return number * 5;
//     }
// });
// let resultForLoop = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     resultForLoop.push("Genap");
//   } else {
//     resultForLoop.push("Ganjil");
//   }
// }
// console.log("result loop", resultForLoop);
// console.log("after", numbers);
// console.log("output", result);
// hasil map harus ditampung
