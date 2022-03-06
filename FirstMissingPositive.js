const firstMissingPositive = (nums) => {
  let filtered = nums.filter(function (x) {
    return x > 0;
  });
  let sorted = filtered.sort((a, b) => a - b);
  let uniq = [...new Set(sorted)]
  let positives = [1];
  for (i = 0; i < positives.length; i++) {
    positives.push(positives[i] + 1)
    if (uniq[i] !== positives[i]) {
      return positives[i];
    }
  }
};

// console.log(
//   "result is ",
//   firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 20])
// );
console.log("result is ",firstMissingPositive([0,2,2,1,1]))
// console.log("result is ",firstMissingPositive([0,1,2]))
// console.log("result is ",firstMissingPositive([7,8,9,11,12]))
// console.log("result is ",firstMissingPositive([3,4,-1,1]))
