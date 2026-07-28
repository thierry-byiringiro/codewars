const encrypt = (text, n) => {
  if (n == 0) {
    return text;
  } else {
    let getOdds = text.split("").filter((_, el) => el % 2 !== 0);
    let getEven = text.split("").filter((_, el) => el % 2 === 0);
    return encrypt(getOdds.join("") + "" + getEven.join(""), n - 1);
  }
};
// console.log(encrypt("This kata is very interesting!", 1));

const decrypt = (text, n) => {
  if (n == 0) {
    return text;
  } else {
    let getOdds = text.split("").filter((_, el) => el % 2 !== 0);
    console.log(getOdds.join(""))
    let getEven = text.split("").filter((_, el) => el % 2 === 0);
    console.log(getEven.join(""))
    let result = [];
    for (let i = 0; i <= getOdds.length; i++) {
      result.push(getEven[i], getOdds[i+1]);
    }
    return decrypt(result.join(""), n - 1);
  }
};
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1)); //ks tvs rente!niTa iae iyrtisg
