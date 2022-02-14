// const removeElement = (arr, val) => {
  
//   let result = [];
//   arr.map((a) => {
 
//     if (a !== val) {

//       result.push(a)
//     }
//   })

//   return result

// }

var removeElement = function (nums, val) {
    // Counter for keeping track of elements other than val
    let count = 0;
    // Loop through all the elements of the array
    for (let i = 0; i < nums.length; i++) {
        // If the element is not val
        if (nums[i] !== val) {
           
          console.log(nums[count++] = nums[i])  
            // console.log("count", nums[count])
        }
        // console.log([count])
    }
    // return count;
};

console.log(removeElement([3,2,2,3,1,9],1))
[3,2,2,3,1,9]
// console.log(removeElement([3,2,2,3], 3))
