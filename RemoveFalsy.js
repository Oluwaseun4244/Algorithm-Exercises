// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

const removeFalse = (arr) => {
  result = [];

  arr.map((child) => {
    if (child) {
      result.push(child);
    }
  });

  return result;
};

console.log(
  "This is result",
  removeFalse([NaN, 0, 15, false, -22, "", undefined, 47, null])
);
