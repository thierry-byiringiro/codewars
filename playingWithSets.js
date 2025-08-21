function isSubsetOf(s1, s2){
  for(let value of s1){
    if(!s2.has(value)){
      return false;
    }
  }
  return true;
}

 function isSupersetOf(s1, s2){
 for(let value of s2){
    if(!s1.has(value)){
      return false;
    }
  }
  return true;
}