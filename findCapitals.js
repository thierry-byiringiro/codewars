const capitals = function (word) {
	if(word.length === 0)return [];
	let newArr = [];
  word.split("").forEach((ele,i) =>{
    if(/[A-Z]/.test(ele) === true){
        newArr.push(i);
    }
  })
  return newArr;
}