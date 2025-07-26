function smallEnough(a, limit){
return a.filter(a => a <= limit).length > 1 ? true : false; 
}
console.log(smallEnough([5,0,1,1,4,6,2,4,0,5,3,4,8], 0))
// let a  = /\d{3}\-?\d{3}\-?|\Sd{4}/g;
