// function mutation(arr) {
//     let split1 = arr[0].toLowerCase().split("")
//     let split2 = arr[1].toLowerCase().split("")
//     console.log("split2", split2);
//     let result = true
//     for (let i=0; i<split2.length; i++){
    
//      let checking = split1.findIndex((child)=> {
//          console.log(split2[i] ,child)
//         return split2[i] === child
//     })
    
//     if (checking < 0){
//     // console.log(i)
//       return false
//     }
    
//     }
    
//       return result;
//     }

//   console.log(mutation(["yxwvutsrqponmlkjihgfedcba", "qzrstu"]))
//   console.log(mutation(["hello", "hey"]))


// function chunkArrayInGroups(arr, size) {
//     let result = []

//     let loopTime = Math.floor(arr.length / size) + 1;
  
//     // console.log(Math.floor(7 / 2))
//     let initial = 0
//     let size2 = size
//     for (let i=0; i<loopTime; i++){
//       result.push(arr.slice(initial, size2))

//       size2 += size
//       initial += size
//     }
    
//     return result = result.filter((child)=>{
//         return (child.length)
    
//     })
//   }

//   console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
//   console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))



// function arrayDiff(arr1, arr2) {
//   let copy = arr1.slice()
//   // let ans = []

//   if (arr2.length <= 1) {
//       return arr1.filter((child) => {
//           return (child != arr2)
//       })
//   } else {
//       for (let i = 0; i < arr2.length; i++) {

//           const filtered = copy.filter(a => a !== arr2[i])
//           copy = filtered

//       }

//       return copy
//   }
//   return copy
// }

// console.log(arrayDiff([], [4, 5]));
// console.log(arrayDiff([3, 4], [3]));
// console.log(arrayDiff([1, 8, 2], []));
// console.log(arrayDiff([1, 2, 3], [1, 2]))
// console.log(arrayDiff([1, 2, 3], [1, 2, 3]))
// console.log(arrayDiff([4, 1, 2, 3], [1, 2, 3]))


// let arr1 = "2A3*3a2";

// console.log("result", arr1.split(""));


// function hi(){
//     let me = []

//     for (let i=arr1.length-1; i>=0; i--){
    
//         me.push(arr1[i])
    
//         // console.log("me1", me.join(""));
//     }
//     console.log("me", me);
//     console.log("my answer is", me.join(''));
// }


// console.log(hi());


function palindrome(str) {
 
    let testing = str.toLowerCase().replace(/[^0-9a-z]/gi, '')

    let splitted = testing.split("")
    let newArr = []
    
    console.log("testing", testing);

       for (let i=splitted.length-1; i>=0; i--){
      
          newArr.push(splitted[i])
      
 
      }
    let result = newArr.join("")
    if (result === testing){
  
    return true;
    } else {
      return false
    }
  }

//   console.log("result", palindrome("eye"));
//   console.log("result", palindrome("not a palindrome"));
//   console.log("result", palindrome("o y o"));
//   console.log("result", palindrome("A man, a plan, a canal. Panama"));
  console.log("result", palindrome("_eye"));
//   console.log("result", palindrome("never odd or even"));
//   console.log("result", palindrome("race car"));