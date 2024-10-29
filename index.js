let array = ["10", "20", "30", "40"];
let newarr = array.map(function (x) {
  return x * 2;
});
console.log(newarr);

let person = {
  firstname: "Sara",
  lastname: "saleh",
  age: 20,
};
for (var i in person) {
  console.log(i + ":" + person[i]);
}

function display(arr2) {
  arr2.forEach((str, index) => {
    setTimeout(() => {
      console.log(str);
    }, index * 1000);
  });
}

let arr2 = ["A", "B", "C", "D"];
display(arr2);
