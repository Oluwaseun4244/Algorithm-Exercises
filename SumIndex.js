// There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

cosnt = sumindex = (arr1, arr2) => {
  let longest = arr1.length >= arr2.length ? arr1.length : arr2.length;
  let result = [];

  for (i = 0; i < longest; i++) {
    if (arr1[i] && arr2[i]) {
      result.push(arr1[i] + arr2[i]);
    } else if (arr1[i] && !arr2[i]) {
        result.push(arr1[i])
    } else {
        result.push(arr2[i])
    }
  }

  return result;
};

console.log("sum index", sumindex([1, 0, 2, 3, 4, 13, 14], [3, 5, 6, 7, 8, 13]));
