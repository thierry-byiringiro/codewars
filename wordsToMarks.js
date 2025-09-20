const wordsToMarks = (string) =>{
    return string.split("").map(el => (el.charCodeAt(0) - 96)).reduce((a,c) => a + c)
}
wordsToMarks("attitude")//100