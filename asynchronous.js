// asynchronus
// berjalan berdasarkan waktu proses

// timer => asynchronous

function a() {
  setTimeout(() => {
    console.log("a");
  }, 200);
}
const b = function () {
  console.log("b");
};
const c = () => {
  setTimeout(() => {
    console.log("c");
  }, 200);
};

// a();
// b();
// c();

// PROMISE ====================================
// janji

const janjian = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isSuccess = false;
    if (isSuccess) {
      resolve("Berhasil");
    } else {
      reject(new Error("Terjadi Error"));
    }
  }, 500);
});
// console.log(janjian);

// then catch
// cb resolve => then
// cb reject => catch
// syntax: promise.then(cb).catch(cb)
// const onSuccess = (result) => {
//   console.log(result);
// };
// const onError = function (error) {
//   console.log(error.message);
// };
// janjian.then(onSuccess).catch(onError);
// janjian
//   .then((result) => {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error.message);
//   });

// async await
// async function janjianFunc() {
//   const result = await janjian;
//   console.log(result);
// }
const janjianFunc = async function () {
  const result = await janjian;
  console.log(result);
};
// const janjianFunc = async () => {
//   try {
//     const result = await janjian;
//     console.log(result);
//   } catch (error) {
//     console.log(error.message);
//   } finally { // optional
//     console.log("try-catch finish");
//   }
// };

janjianFunc();
