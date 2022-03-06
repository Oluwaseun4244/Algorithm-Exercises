const person = {
    name: "Tola",
    age: 99,
    nationality: "Nigeria"
}

console.log("name before destructuring..", person.name)
const {name: name2, age, nationality} = person
console.log("name after destructuring..", name2)
