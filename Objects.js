
// let person = {
//     address : {
//         st : "adekoya",
//         close : "ogba"
//     },
//     name: "chinaka",
//     age: 72,
//     nationality: "Nigeria"
// }

// person.name = "dara"
// delete person.name
// console.log("object class", person.haha)
// console.log("object class", array[0])


// let mobile = {
//     phone1:{
//         brand: 'Samsung',
//         model: 'Galaxy Note 9',
//         price: 98763
//     },
//     phone2:{
//         brand: 'Iphone',
//         model: 'Iphone 37',
//         price: 8686876987689686
//     },
//     phone3:{
//         brand: 'Nokia',
//         model: 'Nokia 3710',
//         price: 8686876987689686
//     },
//   };

//   mobile.phone4 = {
//     brand: 'Sagem',
//     model: 'Sagem 3710',
//     price: 876
//   }
//    
//   delete mobile.phone1.brand
//   for (let key in mobile) {
//     // console.log(mobile[key]["brand"]);
//     // console.log(mobile[key]["price"]);
//     console.log(`${key}: ${mobile[key]["brand"]}`);
//   }

// const obj = {
//     name: "Paul",
//     func: () => {
//         console.log(`I am a function ${obj.name}`)
//     }
// }

// obj.func()


// const person = {
//     name: "John",
//     firstname: "Doe",
//     age: 99
// }

// const {name,firstname,age} = person
// console.log(`the name is ${person.name}`)
// console.log(`the name is ${name}`)

// const name = "Seyi"
// const age = 99
// const obj = {name}
// const solo = {obj}
// console.log("name", solo)
// let name = "Tayo"
// const person = {
//     name: "John",
//     firstname: "Doe",
//     age: 99,
//     func:function(){
//         console.log("my name", this.name + " " + this.firstname)
//     } 
// }

// person.func()


let myPenguins = {
    character: "captain Cook",
    origin: "Mr Pooppers Penguin",
    author: "Richard"


}
// console.log(`hello  i am a penguin my name is  ${myPenguins.author}`);


myPenguins.canFly = false;
myPenguins.chirp = function (a){
    console.log(a)
}

// myPenguins.chirp("CHIRP CHIRP! is this what pengiuns sounds like?");

// console.log(`can my penguins fly ? ${myPenguins.canFly ? 'yes':'No'}`)

myPenguins.sayHello= function(){
    return `"Hello, I'm a penguin and my name is ${this.author}`
}
// console.log(myPenguins.sayHello())

myPenguins.author = "Penguin McPenguinFace"
// console.log(myPenguins.sayHello())
delete myPenguins.origin
// console.log(myPenguins)

myPenguins.fly = function()
{
    // if(myPenguins.canfly == true){
    //     console.log("I can fly!")
    // }else {
    //     console.log("No flying for me!")
    // }
    myTenary = myPenguins.canFly == false ? `No flying for me!` : "I can fly!";
    // console.log(myTenary);
}
myPenguins.fly();

// for (const key in myPenguins) {
//      {
         
//        console.log(key);
        
//     }
// }
// for (const key in myPenguins) {
//      {
         
//        console.log(myPenguins[key]);
        
//     }
// }
myPenguins.favoriteFoods = ['rice', 'beans', 'yam']
console.log(myPenguins.favoriteFoods[1]);

for (let i = 0; i < myPenguins.favoriteFoods.length; i++ ){
    console.log(myPenguins.favoriteFoods[i])
}

myPenguins.favoriteFoods.splice(2, 0, "Garri")

console.log(myPenguins.favoriteFoods)

const  {author, origin, character} = myPenguins

// console.log(author,  character)

myPenguins.favoriteFoods = [...myPenguins.favoriteFoods,'amala' ]

// console.log(myPenguins.favoriteFoods)

// console.log(myPenguins.favoriteFoods.length)

myPenguins.favoriteFoods[myPenguins.favoriteFoods.length-1] = "pineapples"

// console.log(myPenguins.favoriteFoods)

lastFavFood = myPenguins.favoriteFoods[myPenguins.favoriteFoods.length-1]

// console.log(lastFavFood)

myPenguins.outfit = {
    hat:'baseball cap',
    shirt:'hawaiian shirt',
    pants:'cargo shorts',
    shoes:'flip-flops'
}

myPenguins.favoriteFood = {cerial:'rice', legumes:'beans', tuber:'yam'}


// myPenguins.merged = {...myPenguins.favoriteFood,...myPenguins.outfit}
// myPenguins.merged = {}
// myPenguins.merged = myPenguins.favoriteFood.concat(myPenguins.outfit)
const merged =  Object.assign(myPenguins.outfit, myPenguins.favoriteFood)
console.log(myPenguins.merged)

