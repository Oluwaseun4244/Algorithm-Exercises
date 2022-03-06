const func = (num) =>{
    let name = "Tola"
    if (num > 80){
        var state = "Lagos"
        let state2 = "Ekiti"
        var state3 = "Osun"
        console.log("how about this?", name)
    }
    console.log("are you local?",name)
    console.log("are you global?", state3)
    return name
}

// console.log(name)
func(99)
// console.log("are you global?", state)