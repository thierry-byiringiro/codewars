function isIsogram(str){
  let newSet = new Set();
  str.toLowerCase().split("").forEach((el,i) =>{
      newSet.add(el);
  })
  return Array.from(newSet).join("") === str.toLowerCase();
}
console.log(isIsogram('moOse')) // false