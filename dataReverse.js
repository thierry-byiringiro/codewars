const dataReverse = (data) => {
    let arr = [];
    for (i = 0; i < data.length; i++) {
        let b = data.splice(0, 8);
        arr.push(b);
    }
    return arr.reverse().flat(Infinity)

}
console.log(dataReverse([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]))