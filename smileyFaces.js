function countSmileys(arr) {
  return arr.length === 0  ? 0 : arr.filter(elem =>elem.match(/(\:|;)(\-?|~?)[\)|D]/)).length;
}
console.log(countSmileys([]))