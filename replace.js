const tryy = (num) =>{
    return String(num).split("").sort((a,b) => (String(num).indexOf(a) % 2 === 0) - (String(num).indexOf(b) % 2 === 0)).join("");
}
console.log(tryy(948235))