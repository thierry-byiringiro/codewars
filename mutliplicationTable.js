const multiplicationTable = (size) => {
  let a = Array.from({ length: size }, (_, i) => i + 1);
  let newArr = [];
  for (let i = 1; i <= a.length; i++) {
    let b = a.map((el) => el * i);
    newArr.push(b);
  }
  return newArr;
};
console.log(multiplicationTable(3)); // [[1,2,3],[2,4,6],[3,6,9]]
