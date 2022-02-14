const findMedianSortedArrays = function (nums1, nums2) {
    let concatenation = nums1.concat(nums2);
    let sorting = concatenation.sort((a, b) => a - b);
  
    let checking = sorting.length / 2;
    let check2 = sorting.length % 2;
  
    if (check2 == 0) {
      let a = sorting[checking - 1];
      let b = sorting[checking];
  
      return (a + b) / 2;
    } else {
      Median = sorting[Math.floor(checking)];
      return Median;
    }
  };
  
  console.log(findMedianSortedArrays([1, 2, 3], [4, 6, 7]));