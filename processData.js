const processData = (data) => {
    return data.map((el) => el.reduce((a,b) => a - b)).reduce((a,b) => a * b);
}
console.log(processData([[2, 5], [3, 4], [8, 7]]));