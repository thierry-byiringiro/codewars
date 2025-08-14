function capitalize(s){
  return s.split("").filter((ele,i) => i % 2 === 0);
};
console.log(capitalize('aime'));