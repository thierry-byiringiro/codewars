function firstNonRepeatingLetter(s) {
 let newMap = new Map();
 let lowr = s.toLowerCase();
  lowr.split("").forEach((element,index) =>{
    newMap.set(element,(newMap.get(element) || 0) + 1);
  });
    for(char of s.toLowerCase()){
        if(newMap.get(char) === 1){
        return s[s.toLowerCase().indexOf(char)];
        }
  }
  return ""
}