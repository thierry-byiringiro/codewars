function sumDigits(number) {
return [...String(Math.abs(number))].map(ele => Number(ele)).reduce((a,b) => a + b);
}