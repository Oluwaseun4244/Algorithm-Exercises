// Write a JavaScript function to find the difference of two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]

const arrDiff = (arr1, arr2) => {
  common = [];
  merged = arr1.concat(arr2)
  // result = []


  let result = arr2.filter(x => arr1.indexOf(x) === -1);
//   for (i = 0; i < arr1.length; i++) {

//     for(t=0; t<arr2.length; t++){
//         if (arr1[i] == arr2[t]){
//             common.push(arr1[i])
//         }
//     }
//   }

//   for (j=0; j<merged.length; j++){
//     for (k=0; k<merged.length; k++){
//       if (merged[j] == common[k]){
//         merged[j] = null
//       }
//     }
//   }

//  merged.map(a => {
//   if (a){
//     result.push(a)
//   }
// })

return result
};

console.log("This is result", arrDiff([1, 2, 3], [100, 2, 1, 10]));
console.log("This is result", arrDiff([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));

