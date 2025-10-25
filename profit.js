const profit = (arr) =>{
    return arr.length == 1 ? [arr[0],arr[0]] : [arr.sort((a,b) => a - b)[0],arr.sort((a,b) => b - a)[0]];    
}
console.log(profit([1,5,3,2,9]));
console.log(profit([1,2,3,4,5]));
console.log(profit([2334454,5]));
console.log(profit([1]));