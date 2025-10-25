let counter = 0;
const persistence = (num) =>{
    if([...String(num)].length === 1)return 0;
    let numm = persistence(String(num).split("").map(el => Number(el)).reduce((a,b) => a * b));
    counter++;
    
    return counter;
}
console.log(persistence(25));