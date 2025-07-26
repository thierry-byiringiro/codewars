//this codewar is for checking if the provided string is panagram or not
//this is the first method whereby I used arrays
const a = (str) => {
    let a = str.replace(/\s/g,"").toLowerCase().split("");
    let newArr = [];
     a.forEach(elem => {
        if(!newArr.includes(elem)){
            newArr.push(elem);
        }
    })
    return newArr.join("").length === 26 ? true: false;
}
console.log(a('The quick brown fox jumps over the lazy dog')) //true
console.log(a('byiringiro aime thierry')) // false


//the second method whereby i used sets
const b = (str) => {
    let a = str.replace(/\s/gi,"").toLowerCase().split("");
    let newSet = new Set();
     a.forEach(elem => {
        if(!newSet.has(elem)){
            newSet.add(elem);
        }
    })
    return newSet.size === 26 ? true: false;
}
console.log(b('byiringiro aime thierry'))