const encrypt = (text, n) => {
  if (n == 0) {
    return text;
  } else {
    let getOdds = text.split("").filter((_, el) => el % 2 !== 0);
    let getEven = text.split("").filter((_, el) => el % 2 === 0);
    return encrypt(getOdds.join("") + "" + getEven.join(""), n - 1);
  }
};
console.log(encrypt("01234",4)); // s eT ashi tist!  // s eT ashi tist!
//note : to decrypt the encrypted function you have two cases if the provided string is odd you have to loop like 4 times or 
//event times to get the desired output and if its even you have to loop a number of odd times 

const decrypt = (text,n) => {

}
console.log(decrypt('hskt svr neetn!Ti aai eyitrsig',2))
