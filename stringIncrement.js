const incrementString = (str) =>{
   let a = str[str.length - 1];
   let newArr = str.split('');
   let rg = /[a-z]/g;
   let bb = str.match(rg);
   let emptyArr = [];
   if((/[a-zA-Z]/g).test(a) === true){
     newArr.push('1');
     emptyArr =  newArr;
   }else{
   let rg = /[^a-z]/g;
   let kk = str.match(rg).join('');
    let b = Number(kk);
     bb.push(b + 1);
       emptyArr = bb; 
   }
   return emptyArr.join('');

}
//tenemos to slice starting on the last index and moving on to the other one
console.log(incrementString('fo99obar99'))