const tailSwap = (arr) => {
  const splitArr = arr.map((el) => el.split(":"));

  [splitArr[0][1], splitArr[1][1]] = [splitArr[1][1], splitArr[0][1]];

  return splitArr.map((el) => el.join(":"));
};

console.log(tailSwap(["abc:123", "cde:456"]));
