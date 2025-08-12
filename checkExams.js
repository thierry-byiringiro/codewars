const  checkExam = (array1, array2) =>{
    let arr =[];
     for(let i = 0;i<array1.length;i++){
       let count = 0;
        if(array1[i] === array2[i]){
            count =  count  + 4;
       }else{
            if(array2[i] === ""){
                count;
            }else{
                count++;
            }
       }
       arr.push(count);
    }
    let getMany = arr.filter(ele => ele === 4).reduce((a,b) =>a + b,0);
    let getFew = arr.filter(ele => ele === 1).reduce((a,b) =>a + b,0);
    let mult = getMany - getFew;
    return mult < 0 ? 0 : mult;
  }
//   console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))
// console.log(checkExam(["b","a","b","c","a","b","b","a","b","c","a","c","b","b","c","a","b"], ["a","a","c","c","a","c","a","","b","","a","","b","a","","c","b"]))
console.log(checkExam(["c","a","c","a","b","b","a"],["b","","c","b","","b",""]))