function solution(string) {
let stringO = string.split("")
let newString = []
stringO.forEach((elem,index)=>{
    if(/[A-Z]/.test(elem)){
        newString.push(" " + elem);
    }
    else{
        newString.push(elem)
    }
})
return newString.join("");

}
console.log(solution('helloWorld'));//hello World
