const findNonConsecutive = (arr) =>{
for(let i = 0;i<arr.length;i++){
    var firstNum = arr[i];
    var secondNum  = arr[i - 1];
    if(firstNum - secondNum > 1){
        return firstNum;
    }
}
return null;
}
console.log(findNonConsecutive([1,2,3,4,5,6,8]));