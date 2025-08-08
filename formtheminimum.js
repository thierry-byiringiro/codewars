function minValue(values){
  let newSet = new Set();
  values.forEach((elem,index) =>{
    if(!newSet.has(elem)){
      newSet.add(elem);
    }else{
      return newSet;
    }
  })
  let newArr = Array.from(newSet);
  return Number(newArr.sort((a,b) => a - b).join(""))
}
console.log(minValue([1,2,2,1,3,4,4,5,5,6,7]))