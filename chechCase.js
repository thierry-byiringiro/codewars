const id = (c_str) => {
    if (/[A-Z]/g.test(c_str) == true && c_str.includes("_")) {
        return "none";
    } else if (/[A-Z]/g.test(c_str) == true && c_str.includes("-")) {
        return "none";
    } else if (/[a-z]/g.test(c_str) == true && c_str.includes("-") && c_str.split("")[c_str.indexOf("-") + 1] == "-") {
        return "none";
    } else if (/[a-z]/g.test(c_str) == true && c_str.includes("_") && c_str.split("")[c_str.indexOf("_") + 1] == "_") {
        return "none";
    } else if (/[a-z]/g.test(c_str) == true && c_str.includes("-")) {
        return "kebab";
    } else if (/[a-z]/g.test(c_str) == true && c_str.includes("_")) {
        return "snake";
    } else if (/[A-Z]/g.test(c_str) == true) {
        return "camel";
    } else {
        return "none";
    }
}