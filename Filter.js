let ages = [4,78,70,17,44,13,18,5]

const underage = ages.filter((age)=>{
    return age < 18
})

console.log("adults", underage)