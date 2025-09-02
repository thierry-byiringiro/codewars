const oddNEvenUsingMap = (arr) => {
    let newMap = new Map();
        let even = [];
        let odd = [];
    let a = arr.forEach((el,i) => {
        if(el % 2 === 0){
            even.push(el);
            newMap.set("Even: ",even)
        }else{
            odd.push(el)
            newMap.set("Odd",odd)
        }
    })
    return newMap;
}
console.log(oddNEvenUsingMap([1,2,3,4,5,6,7,8,9,10]))