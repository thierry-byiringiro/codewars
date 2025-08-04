const mexicanWave = (strng) =>{
let newArr = [];
let newStr = strng.includes(" ") ? strng.replace(/[\s]/g,"") : strng;
let lengthofStr = strng.length;
for(let i = 0;i<lengthofStr;i++){
    if(strng[i] === " ")continue;
    let Capitalize = strng.split("").map((char,index) => index === i ? char.toUpperCase() : char);
    newArr.push(Capitalize.join(""));
}
return newArr;
}
console.log(mexicanWave('byiringiro'));