const twoSum = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {
          for (let j=i+1; j<nums.length; j++){
              if (nums[i] + nums[j] == target){
                  return [i, j]
              }
          }
    }
  };
  
  console.log("result", twoSum([1,2,4], 3));
  console.log("result", twoSum([3,2,4], 7));