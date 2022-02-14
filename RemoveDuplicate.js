// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)


const duplicate = (arr) => {
    return [...new Set(arr)]
}

console.log(duplicate([2,5,5,7,9,2,"hello","hello"]))