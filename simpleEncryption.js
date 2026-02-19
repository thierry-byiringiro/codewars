const encrypt = (text, n) => {
  if (n == 0) {
    return text;
  } else {
    let getOdds = text.split("").filter((_, el) => el % 2 !== 0);
    let getEven = text.split("").filter((_, el) => el % 2 === 0);
    return encrypt(getOdds.join("") + "" + getEven.join(""), n - 1);
  }
};
console.log(encrypt("This is a test!", 2)); // s eT ashi tist!  // s eT ashi tist!
