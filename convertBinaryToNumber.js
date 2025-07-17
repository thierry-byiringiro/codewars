const binaryArrayToNumber = arr => {
  let joinedArr = arr.join('');
  function binaryToDecimal(binaryNumber){
    return parseInt(binaryNumber,2);
  }
  return binaryToDecimal(joinedArr);
};