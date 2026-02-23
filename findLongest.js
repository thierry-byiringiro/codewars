function findLongest(array){
  let maxLength = Math.max(...array.map(el => String(el).length));
  const getValue = array.find(el => String(el).length === maxLength)
  return getValue
}
console.log(findLongest([8000,9000,50,20,10]))