function accum(s) {
	let newArr = [];
  let allToLowerCase = s.toLowerCase();
  for(let i = 0;i<allToLowerCase.length;i++){
    const char = allToLowerCase[i];
    const repeatChar = char.repeat(i + 1);
    const upperRepeat = repeatChar.charAt(0).toUpperCase() + repeatChar.slice(1);
    newArr.push(upperRepeat)
    }
  return newArr.join('-');
}
console.log(accum("aime"));