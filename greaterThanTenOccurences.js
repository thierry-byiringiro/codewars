function greaterThanTenOccurences(){
    const numbers = [4, 12, 7, 15, 20, 3, 18];
    let count =  0;
    for(let i = 0; i <= numbers.length;i++){
        if(numbers[i] > 10){
            count++;
        }else{
            continue;
        }
    }
    return count;
}
console.log(greaterThanTenOccurences())