function one(){
    console.log(1)
    return '1';
}
function add(){
    console.log(`+`)
    return `+`;
}
function two(){
    return '2';
}

console.log(two(add(two())));


function one(x) {
  console.log("one");
  return "one";
}

function two() {
  console.log("two");
  return "two";
}

console.log(one(two())); 


