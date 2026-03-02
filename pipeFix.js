function pipeFix(numbers){
    let firstIndex = numbers[0];
    let getLastIndex = numbers[numbers.length - 1];
    const newArr = [];
    for(let i = firstIndex;i <= getLastIndex;i++){
        newArr.push(i);
    }
    return newArr;
}
console.log(pipeFix([1,3,5,6,7,8]));
console.log(pipeFix([6,9]))
console.log(pipeFix([-1,4]))