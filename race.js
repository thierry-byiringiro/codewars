function race(v1, v2, g) {
    if(v1 >= v2)return null;
  let getSubtraction = v2 - v1;
  let value = Math.floor((g / getSubtraction) * 3600);
  let h = Math.floor(value / 3600);
  let m = Math.floor((value % 3600) / 60);
  let s = Math.floor(value % 60);
  return [h, m, s];
}
console.log(race(720, 850, 70));
console.log(race(80, 91, 37));
