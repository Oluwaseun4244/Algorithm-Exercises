// Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

const union = (arr1, arr2) => {
  let merged = arr1.concat(arr2);
  let result = [];

  let sorting = merged.sort((a, b) => a - b);

  for (i = 0; i < sorting.length; i++) {
    let index = result.indexOf(sorting[i]);

    if (index < 0) {
      result.push(sorting[i]);
    }
  }

  return result;
};

console.log(union([1, 2, 3], [100, 2, 1, 10]));
