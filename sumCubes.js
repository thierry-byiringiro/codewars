const sumCubes = (n) => {
    let newArr = [];
    for(let i = 1;i<=n;i++){
        newArr.push(i);
    }
    return newArr.map(el => el ** 3).reduce((a,b) => a + b);
}