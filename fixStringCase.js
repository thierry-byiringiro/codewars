function solve(s){
    let getUppers = s.match(/[A-Z]/g) === null ? s.length : s.match(/[A-Z]/g).length;
    let getLowers = s.match(/[a-z]/g) === null ? s.length : s.match(/[a-z]/g).length;
    if(getUppers > getLowers){
      return s.toUpperCase();
    }else if(getLowers >= getUppers){
      return s.toLowerCase();
    }
}
    
console.log(solve('CODE'))