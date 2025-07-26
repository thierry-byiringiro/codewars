function openOrSenior(data){
 let [...c] = data;
 let newArr =  c.map(a => a.filter(c => c).reduce((p,x) => p + x));
 let nnew = [];
 let mssg;
for(let i = 0 ;i < newArr.length;i++){
    if(newArr[i] >= 62){
        mssg = 'Senior';
    }else{
        mssg = 'Open';
    }
    nnew.push(mssg);
}
return nnew;
}
console.log(openOrSenior([[85,26],[17,-2],[31,3],[22,10],[81,0],[10,2],[13,23]]))