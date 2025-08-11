function sumArray(array) {
if(array === null || array === undefined ){
    return 0;
}else if (array.length < 2){
    return 0;
}
let sortArray = array.sort((a,b) => a - b);
let  oo = sortArray.splice(0,1);
let ii = sortArray.splice(sortArray.length - 1);
return array.reduce((x,y) => x + y),0;
}
console.log(sumArray([]))

