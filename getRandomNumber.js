const getRandomNumber = () => {
  let newArr = [];
  for (let i = 1; i <= 10; i++) {
    newArr.push({
      value: Math.ceil(Math.random() * 6),
      isHeld: i % 2 == 0 ? true : false,
    });
  }
  return newArr;
};
console.log(getRandomNumber());
