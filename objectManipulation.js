const personalInfo = {
  name: "Fazztrack",
  age: 20,
  address: "Jakarta",
};
const hobbies = ["Swimming", "Reading", "Hiking", 100];
const str = "Hello World";

// for loop
// 1. for in
// 2. for of
// for (let index in hobbies) {
//   console.log(`index-${index} = ${hobbies[index]}`);
// }
// for (let key in personalInfo) {
//   console.log(`key-${key} = ${personalInfo[key]}`);
// }

// for (let hobby of hobbies) {
//   console.log(hobby);
// }
// for (let letter of str) {
//   console.log(letter);
// }

// mengambil list key dari object
// console.log(Object.keys(personalInfo));
// for (let key of Object.keys(personalInfo)) {
//   console.log(key);
//   console.log(personalInfo[key]);
// }

// DESTRUCTURING ==============================
// mengambil nilai atau elemen dari suatu object/array
// syntax
// 1. obj => tipeVar { ...key } = targetObj
// 2. arr => tipeVar [ ...name ] = targetArr

const { address, name: fullName, age } = personalInfo;
// const address = personalInfo.address;
// const age = personalInfo.age;
// const fullName = personalInfo.name;
// console.log(address, age, fullName);

const rgb = [100, 50, 255];
const [red, green, blue] = rgb;
// const red = rgb[0];
// const green = rgb[1];
// const blue = rgb[2];
// console.log(red, green, blue);

// SPREAD OPERATOR ===============================
// syntax: ...namaVar

// copy object/array
const anotherInfo = { ...personalInfo };
const anotherHobbies = [...hobbies];
// console.log(anotherInfo);
// console.log(anotherHobbies);
const arrOfHobbiesAndRGB = [...rgb, ...hobbies];
console.log(arrOfHobbiesAndRGB);

const addressInfo = {
  street: "Rasamala",
  city: "Cirebon",
  name: "Andre",
};
const objOfPersonalAndAddressInfo = { ...addressInfo, ...personalInfo };
console.log(objOfPersonalAndAddressInfo);

// update object
const userInfo = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
const updatedUserInfo = {
  ...userInfo,
  username: "Leanne",
  name: "Andre",
};
console.log(updatedUserInfo);

// const arrOfObj = [{ id: 1 }, { id: 2 }, { id: 3 }];
// const result = arrOfObj.map((item) => {
//   if (item.id === 2) {
//     return {
//       ...item,
//       name: "Damar",
//     };
//   } else {
//     return item;
//   }
// });
// console.log(result);
