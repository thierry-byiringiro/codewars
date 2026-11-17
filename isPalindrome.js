function isPalindrome(x){
    let newArr = String(x).split("").reverse().join("")
    console.log(x % 10)
    if(newArr === String(x)){
        return true;
    }else{
       return false
    }
}
console.log(isPalindrome(121))



