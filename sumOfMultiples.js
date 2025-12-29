const sumMul = (n, m) => {
    if (n > m) {
        return "INVALID";
    }
    let a = 0;
    for (i = n; i < m; i = i + n) {
        a += i;
    }
    return a;
}
console.log(sumMul(2, 9)) //20
console.log(sumMul(3, 13)) //30
console.log(sumMul(4, 123)) //1860
console.log(sumMul(4, -7)) // INVALID