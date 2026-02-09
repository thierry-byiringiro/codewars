function orderedCount(text) {
    text.split("");
    const newMap = new Map();
    for (const char of text) {
        newMap.set(char, (newMap.get(char) || 0) + 1);
    }
    console.log(newMap);
    return Array.from(newMap.entries());
}
console.log(orderedCount("abracadabra"));