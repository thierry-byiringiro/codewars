const longest = (s1, s2)=> Array.from(new Set([...s1,...s2])).sort().join("")
console.log(longest("inmanylanguages", "theresapairoffunctions"));