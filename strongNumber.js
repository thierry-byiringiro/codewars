const strongNumber = (n) => {
  if (n == 1 || n == 2) {
    return "STRONG!!!!";
  } else if (String(n).length === 1) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result = result * i;
    }
    return result === n ? "STRONG!!!!" : "Not Strong !!";
  } else {
    let newNo = String(n).split("");
    let newA = [];
    newNo.map((el) => {
      let result = 1;
      for (let i = 1; i <= el; i++) {
        result = result * i;
      }
      newA.push(result);
    });
    let finalRes = newA.reduce((a, b) => a + b);
    return finalRes === n ? "STRONG!!!!" : "Not Strong !!";
  }
};
console.log(strongNumber(1));
console.log(strongNumber(123));
console.log(strongNumber(145));
console.log(strongNumber(150));
