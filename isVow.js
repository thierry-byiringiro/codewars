const isVow = (a) => {
    let b = [97,105,117,111,101];
    return a.map(el => b.includes(el) ? String.fromCharCode(el) : el);
}
console.log(isVow([100,100,116,105,117,121]))
console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]))