const capitalize = (str) =>{
    let earr = [];
    let even = str.split("").forEach((ele,index) =>{
        if(index % 2 === 0){
            earr.push(ele.toUpperCase())
        }else{
            earr.push(ele)
        }
    })
    let oarr = [];
    let odd = str.split("").forEach((ele,index) =>{
        if(index % 2 !== 0){
            oarr.push(ele.toUpperCase())
        }else{
            oarr.push(ele)
        }
    })
    return Array.of(earr.join(""),oarr.join(""));
}