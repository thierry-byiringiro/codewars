const  sortArray = (array) =>{
let getOdds =array.filter(elm => elm % 2 !== 0).sort((a,b) => a - b)
let oddIndex = 0;
let newArr = [];
for(let i = 0;i<array.length;i++){
    if(array[i] % 2 !== 0){
        newArr.push(getOdds[oddIndex++]);
    }else{
        newArr.push(array[i])
    }
}
return newArr;
}
console.log(sortArray([5, 3, 2, 4, 1, 8, 11]))