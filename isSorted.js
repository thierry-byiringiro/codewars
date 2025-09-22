const  isSortedAndHow = (arr) => {
    let ascending = [...arr].sort((a,b) => a - b);
    let descending = [...arr].sort((a,b) => b - a);
    if(arr.every((value,index) => value === ascending[i])){
        return 'yes,ascending';
    }else if(arr.every((value,index) => value === ascending[i])){
        return "yes,descending";
    }else{
        return 'no';
    }
}
console.log(isSortedAndHow([1,2]))
console.log(isSortedAndHow([2,1]))