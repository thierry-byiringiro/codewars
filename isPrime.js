const is_Prime = (num) => {
    let newArr = [];
    for(let i = 1;i<=num;i++){
        if(num % i === 0){
            newArr.push(i);
        }
    }
    return newArr;

}
console.log(is_Prime(4));