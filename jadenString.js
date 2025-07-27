Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
     return this.split(' ').map(a => a.charAt(0).toUpperCase() + a.slice(1)).join(' ');
   }
  }
);
console.log("How can mirrors be real if our eyes aren't real".toJadenCase())