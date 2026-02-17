const tailSwap = (arr) => {
  arr = arr.map((el) => [el]);
  let q = arr.map((n) => {
    n = n.join("").split("");
    let b = n.indexOf(":");
    let a = n.splice(b + 1, n.length);
    n.pop();
    return [n, a];
  });
  [q[0][0], q[0][1], q[1][0], q[1][1]] = [q[0][0], q[1][1], q[1][0], q[0][1]];

  return q.map((el) => el.map((el) => el.join("")).join(":"));
};
// console.log(a(["abc:123", "cde:456"]));
console.log(tailSwap(["a:12345", "777:xyz"]));
