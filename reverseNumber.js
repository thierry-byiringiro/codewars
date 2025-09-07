function reverseNumber(n) {
return String(n).split("")[0] === '-' ? -Number(String(n).match(/[0-9]/g).reverse().join("")) : Number(String(n).split("").reverse().join(""));
}
console.log(reverseNumber(123))//321
console.log(reverseNumber(-456))//-654
console.log(reverseNumber(1000))//1