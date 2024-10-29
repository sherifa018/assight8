// //Task1
// let array = ["10", "20", "30", "40"];
// let newarr = array.map(function (x) {
//   return x * 2;
// });
// console.log(newarr);

//Task2
let person = {
  firstname: "Sara",
  lastname: "saleh",
  age: 20,
};

function displayObject(obj) {
  for (var key in obj) {
    console.log(key + " : " + obj[key]);
  }
}
displayObject(person);

//Task3
// function display(arr2) {
//   arr2.forEach((str, index) => {
//     setTimeout(() => {
//       console.log(str);
//     }, index * 1000);
//   });
// }

// let arr2 = ["A", "B", "C", "D"];
// display(arr2);
