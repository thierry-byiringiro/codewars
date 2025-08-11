//this codewar kata is for deciding if a certain employee is 
//senior or a opener whereby we'll start by adding every element inside that array
//and then after all the arrays that their sum is greater that 62 they're senior 
// and if not they're senior 
function openOrSenior(data){
 let [...c] = data; //here I started by destructuring the array getting access to every little array inside the big array 
 let newArr =  c.map(a => a.filter(c => c).reduce((p,x) => p + x));
 //after getting access to every single array i used the reduce method so that i'll be able 
 //to add elements inside
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