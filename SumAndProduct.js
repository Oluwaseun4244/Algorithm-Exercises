// Write a JavaScript program to compute the sum and product of an array of integers

const sumAndProduct = (arr) =>{
    let sum = 0
    let product = 1

    arr.map((a)=>{
        sum += a
        product *=a
    })

    console.log("product", product)
    console.log("sum", sum)
}

console.log("first", sumAndProduct([6,3,6,2,4]))