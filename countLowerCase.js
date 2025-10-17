function lowercaseCount(str){
    return str.length === 0 ? 0 : str.match(/[a-z]/g) === null ? 0 : str.match(/[a-z]/g).length;
}
console.log(lowercaseCount('byiringiro'));