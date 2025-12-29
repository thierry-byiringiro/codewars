const alphabetPosition = (text) => {
    return text.toLowerCase().split("").filter((el) => el.match(/[a-zA-Z]/g)).map((el) => el.charCodeAt(0) - 96).join(" ");
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));