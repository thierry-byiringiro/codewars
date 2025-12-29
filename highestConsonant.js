const highScore = (str) =>{
    let removeVowels = str.match(/[^aiuoe]/gi);
    return removeVowels.map(el => removeVowels.join("").charCodeAt(removeVowels.indexOf(el))).map(el => el - 96).sort((a,b) => b - a)[0];

}
console.log(highScore("strength"));
