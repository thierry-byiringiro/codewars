function bump(x){
return  x.match(/n/g) === null ? "Woohoo!" : x.match(/n/g).length <= 15 ? "Woohoo!" : 'Car Dead';
}