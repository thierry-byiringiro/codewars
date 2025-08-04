const high = (x) =>{
let lowerCaseLetter = x.toLowerCase().split(' ');
let getTheWord = lowerCaseLetter.map(word => 
    [...word].reduce((sum,char) => {
        let cd = char.charCodeAt(0);
        return cd >= 97 && cd <= 122 ? sum + (cd - 96) : sum;
    },0)

);
console.log(getTheWord)
let getIndex = getTheWord.indexOf(Math.max(...getTheWord));
return lowerCaseLetter[getIndex];
}
console.log(high('byiringiro aime thierry'));