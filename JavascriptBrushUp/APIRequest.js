// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//     console.log("Async Task is completed");
//   }, 2000);
// });

// promiseOne.then(() => {
//   console.log("Promise is completed");
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async Task is completed");
//     resolve({ username: "Aman", age: "24" });
//   }, 2000);
// }).then((user) => {
//   console.log(user);
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Aman", age: "24" });
//     } else {
//       reject("ERROR: Promise is rejected");
//     }
//   }, 1000);
// })
//   .then((userData) => {
//     return userData.age;
//   })
//   .then((umar) => {
//     console.log(umar);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The promise is resolved or rejected.");
//   });

// new Promise((resolveOuter) => {
//   resolveOuter(
//     new Promise((resolveInner) => {
//       setTimeout(resolveInner, 1000);
//     })
//   );
// });

const value = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    console.log("This is the first promise");
    if (!error) resolve({ username: "Aman", age: "24" });
    else reject("ERROR: First Promise is rejected");
  }, 2000);
})
  .then((info) => {
    return info.age;
  })
  .then((age) => {
    console.log(age);
  })
  .catch((error) => {
    console.log(error);
  });

value.status;
// console.log(value); // Promise { <pending> }

// async function fetchData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   // console.log(typeof response);

//   try {
//     const data = await response.json();
//     console.log(data[4].title);
//   } catch (error) {
//     console.log("error occured.");
//   }
// }

// function fetchData() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => {
//       console.log(data[4].title);
//     })
//     .catch((error) => {
//       console.log("error occured.");
//     });
// }

// fetchData();
