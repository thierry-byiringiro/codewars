function mergeArrays(arr1, arr2) {
  let mergeAndSort =  [...arr1,...arr2].sort((a,b) => a - b);
  let newSet = new Set();
  mergeAndSort.forEach((elem) =>{
      if(!newSet.has(elem)){
           newSet.add(elem);
      }else{
           newSet;
      }
  })
  let newArr = [];
    newSet.forEach((elem) =>{
        newArr.push(elem);
    });
    return newArr;
}
console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]))