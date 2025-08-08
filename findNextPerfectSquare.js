const findNextSquare = (sq) =>{
    let newArr = [];
    let mm = Math.sqrt(sq);
    if(Number.isInteger(mm) === false){
            return -1;
    }else{
    for(let i = 0;i<sq;i++){
        if(sq % i === 0){
            newArr.push(i);
        }
    }
    let op = newArr.filter((ele) =>{
        return ele * ele === sq;
    }).join("");
   let nextSquare = Number(op) + 1;
   return nextSquare * nextSquare;
}
}
console.log(findNextSquare(625))