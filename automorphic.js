const automorphic = (n) => {
    // let squared = ;
    return String(n ** 2).endsWith(String(n)) ? "Automorphic" : "Not!!" ;
}
console.log(automorphic(13));