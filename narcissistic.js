const narcissistic = (n) => {
    return n === String(n).split("").map((el) => Math.pow(el,String(n).length)).reduce((a,b) => a + b ,0);
    }
console.log(narcissistic(153))
