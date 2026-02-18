const a = (b) => {
  let getOdds = b.split("").filter((_, el) => el % 2 !== 0);
  let getEven = b.split("").filter((_, el) => el % 2 === 0);
  return getOdds.join("") + "" + getEven.join("");
};
console.log(a("012345"));
