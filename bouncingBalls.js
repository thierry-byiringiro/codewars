// function bouncingBall(h,  bounce,  window) {
//   if(bounce > 0 && bounce < 1){
//       let multi = h * window;
//       return Math.ceil(multi * bounce);
// }else{
//     return -1;
//   }
// }
// console.log(bouncingBall(30.0, 0.66, 1.5))
const dataReverse = (data) =>{
    let arr = [];
for(i = 0;i<data.length;i++){
    let b = data.splice(0,8);
    arr.push(b);
}
return arr.flat(Infinity).reverse()
    
}
console.log(dataReverse([]))