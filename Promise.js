// const urls = [
//    "https://jsonplaceholder.typicode.com/users",
//    "https://jsonplaceholder.typicode.com/posts",
//    "https://jsonplaceholder.typicode.com/albums"

// ]

// Promise.all(urls.map(url =>{
//     return fetch(url).then(res => res.json())
// })).then(
//     results =>{
//         console.log("results", results[0]);
//         console.log("results", results[1]);
//         console.log("results", results[2]);
//     }
// )


const urls = [
   "https://jsonplaceholder.typicode.com/users",
   "https://jsonplaceholder.typicode.com/posts",
   "https://jsonplaceholder.typicode.com/albums"

]

 function getdata3() {

    const [user, posts, album ] =  Promise.all(urls.map(url =>{
         fetch(url).then(res => res.json())
    }))
    console.log("user")
    
    
}

