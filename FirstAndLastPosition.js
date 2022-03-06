let result = [-1, -1];
let i = 0;
const searchRange = function (nums, target) {
 
  if (i > 1) {
    return result;
  } else {
   let index = nums.indexOf(target);
    if (index < 0) {
      return result;
 
    } else {
      result[i] = index;

      nums[index] = false;

      i++;

      searchRange(nums, target);
    }
  }

  return result
};

// let nums = [5, 7, 7, 8, 8, 10];
let nums = [5, 7, 7, 8, 8, 10];

// let target = 6;
let target = 8;

console.log("range is", searchRange(nums, target));
