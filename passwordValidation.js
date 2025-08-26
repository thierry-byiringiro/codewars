// const passwordValidation = (pin) =>{
//     let passReg = /^([A-Z]|[a-z]|[0-9])(([a-z][A-Z][0-9])|([A-Z][a-z][0-9])|([0-9][A-Z][a-z])|([0-9][a-z][A-Z])|([a-z][0-9][A-Z])|([A-Z][0-9][a-z])){6,}/g;
//     let test = passReg.test(pin);
//     return test;
// }
// console.log(passwordValidation('fjd3IR9'))

/*
You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric)

*/

const passwordValidation = (pin) =>{
return (
    pin.length >= 6 && /[A-Z]/.test(pin) && /[a-z]/.test(pin) && /[0-9]/.test(pin)
);
}
console.log(passwordValidation('Aime122'))