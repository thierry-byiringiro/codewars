const needle = (haystack, needle) => {
// if(haystack.includes(needle)) return -1;
let b = haystack.split("").findIndex((need) => need === '');
let c = haystack.split("").map((el) => needle.split("").filter((ele) => ele === el))

    
}
console.log(needle("sadbutsad","sad"))
console.log(needle("leetcode","leeto"))