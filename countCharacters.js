const count =(string) =>{
if(string.length === 0)return {};
  let obj = {};
  for(let i = 0;i<string.length;i++){
    const char  = string[i];
    
    if(obj[char]){
      obj[char]++;
    }else{
      obj[char]  = 1;
    }
  }
  return obj;
}
console.log(count('byiringiro'));//{b:1,y:1,i:3,r:2,n:1,g:1,o:1}