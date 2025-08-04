const rot13 = (str) => {


    let splitI = str.split("");
    for (let i = 0; i < splitI.length; i++) {
        let char = splitI[i];
        if (char === 'a' ) 
            splitI[i] = 'n';
         else if (char === 'b') splitI[i] = 'o'
         else if (char === 'c') splitI[i] = 'p'
         else if (char === 'd') splitI[i] = 'q'
         else if (char === 'e') splitI[i] = 'r'
         else if (char === 'f') splitI[i] = 's'
         else if (char === 'g') splitI[i] = 't'
         else if (char === 'h') splitI[i] = 'u'
         else if (char === 'i') splitI[i] = 'v'
         else if (char === 'j') splitI[i] = 'w'
         else if (char === 'k') splitI[i] = 'x'
         else if (char === 'l') splitI[i] = 'y'
         else if (char === 'm') splitI[i] = 'z'
         else if (char === 'n') splitI[i] = 'a'
         else if (char === 'o') splitI[i] = 'b'
         else if (char === 'p') splitI[i] = 'c'
         else if (char === 'q') splitI[i] = 'd'
         else if (char === 'r') splitI[i] = 'e'
         else if (char === 's') splitI[i] = 'f'
         else if (char === 't') splitI[i] = 'g'
         else if (char === 'u') splitI[i] = 'h'
         else if (char === 'v') splitI[i] = 'i'
         else if (char === 'w') splitI[i] = 'j'
         else if (char === 'x') splitI[i] = 'k'
         else if (char === 'y') splitI[i] = 'l'
         else if (char === 'z') splitI[i] = 'm'

         if (char === 'A' ) 
            splitI[i] = 'N';
         else if (char === 'B') splitI[i] = 'O'
         else if (char === 'C') splitI[i] = 'P'
         else if (char === 'D') splitI[i] = 'Q'
         else if (char === 'E') splitI[i] = 'R'
         else if (char === 'F') splitI[i] = 'S'
         else if (char === 'G') splitI[i] = 'T'
         else if (char === 'H') splitI[i] = 'U'
         else if (char === 'I') splitI[i] = 'V'
         else if (char === 'J') splitI[i] = 'W'
         else if (char === 'K') splitI[i] = 'X'
         else if (char === 'L') splitI[i] = 'Y'
         else if (char === 'M') splitI[i] = 'Z'
         else if (char === 'N') splitI[i] = 'A'
         else if (char === 'O') splitI[i] = 'B'
         else if (char === 'P') splitI[i] = 'C'
         else if (char === 'Q') splitI[i] = 'D'
         else if (char === 'R') splitI[i] = 'E'
         else if (char === 'S') splitI[i] = 'F'
         else if (char === 'T') splitI[i] = 'G'
         else if (char === 'U') splitI[i] = 'H'
         else if (char === 'V') splitI[i] = 'I'
         else if (char === 'W') splitI[i] = 'J'
         else if (char === 'X') splitI[i] = 'K'
         else if (char === 'Y') splitI[i] = 'L'
         else if (char === 'Z') splitI[i] = 'M'
        
        }
        return splitI.join("")


}
console.log(rot13('Test'))