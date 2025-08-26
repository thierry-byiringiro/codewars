function multiTable(number) {
  let multi = [];
  for(let i = 1;i<=10;i++){
   multi.push(`${i} * ${number} = ` + `${number}` * `${i}`);
  }
  return multi.join('\n');
  }
  console.log(multiTable(5))