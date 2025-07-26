const domainName = (url) => {
let a = url.replace(/.+\/\/|www.|\..+/g,'');
return a;
}
console.log(domainName('http://github.com/carbonfive/raygun'));
