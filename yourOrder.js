const yourOrder = (str) =>{
    let a = /\d/g;
    let d = str.match(a).sort()
    let c = str.split(" ").sort((a,b) => d[a] - d[b]);
    return c;

}
console.log(yourOrder("is2 Thi1s T4est 3a"))