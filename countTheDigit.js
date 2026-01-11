const countTheDigit = (n, d) => {
    let a = Array.from({ length: n + 1 }, (k, i) => i ** 2);
    let b = a.filter(el => String(el)).join("").split("");
    return b.filter(el => Number(el) === d).length;
};
console.log(countTheDigit(25, 1));