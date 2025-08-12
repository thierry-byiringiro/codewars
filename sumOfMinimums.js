const  sumOfMinimums = (arr) =>{
 let newArr = arr.map(c => c.sort((a,b) => a - b)[0])
 return newArr.reduce((x,y) => x + y);
}
console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))