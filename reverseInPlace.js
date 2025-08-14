const reversePlace = (str) =>{
    return str.split(" ").map(st => st.split("").reverse().join("")).join(" ")
}
console.log(reversePlace("I am the good boy"))