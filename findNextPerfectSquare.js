const findNextSquare = (sq) =>{
let root = Math.sqrt(sq);
if(!Number.isInteger(root))return -1;
return (root + 1) ** 2;
}
console.log(findNextSquare(625))