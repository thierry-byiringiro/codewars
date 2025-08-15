const findShort = (s) =>{
    return s.split(" ").map(el => el.length).sort((a,b) => a -b)[0]
}
console.log(findShort('byiringiro aime thierry'))