// Write a JavaScript function to find the difference of two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]

let result1 = [];

const unfold = (expectedArray1) => {


  expectedArray1.forEach((child) => {
    if (Array.isArray(child)) {
      unfold(child);
    } else {
      result1.push(child);
    }
  });

  // return console.log("result1", result1);
};

let result2 = [];
const unfold2 = (expectedArray2) => {
  expectedArray2.forEach((child2) => {
    if (Array.isArray(child2)) {
      unfold2(child2);
    } else {
      result2.push(child2);
    }
  });

  let longest =
    result1.length >= result2.length ? result1.length : result2.length;
  let newArr = [];
  for (i = 0; i < longest; i++) {
    let check = result1.indexOf(result2[i]);

    if (check < 0) {
      newArr.push(result2[i]);
    }
  }

  return console.log(newArr);
};

const arrDiff = (arr1) => {
  return unfold(arr1);
};
const arrDiff2 = (arr2) => {
  return unfold2(arr2);
};

arrDiff([1, 2, 3, 4, 5]);
arrDiff2([1, [2], [3, [[4]]], [5, 6]]);
