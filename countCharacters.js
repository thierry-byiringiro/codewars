//this program is for counting number a certain character occured in a string where
//it'll display them inside an object
const count =(string) =>{
if(string.length === 0)return {};//firstly this condition tells that if the string's length is exactly equal to zero return empty object;
  let obj = {};
//  Here I created an object that'll be holding the result 
  for(let i = 0;i<string.length;i++){
    const char  = string[i];//this variable is holding each character of the string as we loop through it 
    if(obj[char]){//here is for checking if the character that we're holding exists increment starting from we're we left off
      obj[char]++;
    }else{
      obj[char]  = 1; // and here if it does not exist value be one
    }
  }
  return obj;
}
console.log(count('Indivisibilities'));//{b:1,y:1,i:3,r:2,n:1,g:1,o:1}