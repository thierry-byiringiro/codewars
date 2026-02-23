const removeSmallest = (numbers) => {  
    if(numbers.length <= 1)return [];

    const minValue = Math.min(...numbers);
    const index = numbers.indexOf(minValue);

    return [
        ...numbers.slice(0,index),
        ...numbers.slice(index + 1)
    ]
}
console.log(removeSmallest([2,2,1,2,1]))