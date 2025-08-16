const encryptThis = (text) => {
  text = text.split(" ");
  if (text.length === 1) {
    text = text.join(" ");
    let ascii = text.charCodeAt(0).toString();
    if (text.length === 1) return ascii;
    if (text.length === 2) return ascii + text[1];

    let body = text.slice(1).split("");
    [body[0], body[body.length - 1]] = [body[body.length - 1], body[0]];
    return ascii + body.join("");
  } else {
    let full = text.map(ele => {
      let ascii = ele.charCodeAt(0).toString();
      if (ele.length === 1) return ascii;
      if (ele.length === 2) return ascii + ele[1];

      let body = ele.slice(1).split("");
      [body[0], body[body.length - 1]] = [body[body.length - 1], body[0]];
      return ascii + body.join("");
    });
    return full.join(" ");
  }
};
console.log(encryptThis('my name is byiringiro aime thierry'));