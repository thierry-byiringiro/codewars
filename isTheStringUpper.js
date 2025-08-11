//whenever you are assigned to do a program that contains the prototype 
//you'll have to use the "this" keyword as it's the one that'll be presenting the 
//element or the string that we are accessing the prototype on 
String.prototype.isUpperCase = function() {
    return this.split("").every(n => n === n.toUpperCase());
}
console.log("AIME".isUpperCase())

