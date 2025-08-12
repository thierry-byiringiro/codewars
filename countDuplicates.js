const duplicateCount = (str) => {
   let obj = {};
   str = str.toLowerCase().split("")
   for(let i = 0;i<str.length;i++){
    const char = str[i];
    if(obj[char]){
        obj[char]++;
    }else{
        obj[char] = 1;
    }
   }
   let objs = Object.values(obj);
   return objs.filter(ele => ele >=2).length;
}
console.log(duplicateCount('aadfasd'))