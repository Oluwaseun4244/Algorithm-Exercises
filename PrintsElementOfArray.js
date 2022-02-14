// Write a JavaScript program which prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// “…..”

const printElements = (arrParent) => {
  for (i = 0; i < arrParent.length; i++) {
    let row = i + 1;
    let child = arrParent[i];
    console.log(`Row ${row}`);

    for (j = 0; j < child.length; j++) {
      console.log(child[j]);
    }
  }
};

console.log(
  "Result",
  printElements([
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
  ])
);
