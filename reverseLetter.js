function reverseLetter(str) {
  return str.match(/[a-zA-Z]/gi).reverse().join("")
}
console.log(reverseLetter("ab23c"))