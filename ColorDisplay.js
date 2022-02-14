//  We have the following arrays 
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -
// Note : Use ordinal numbers to tell their position.


const colorDisplay = (colors) => {
  let ordinal = ["st", "nd", "rd", "th"];
  let i = 0;
  colors.map((color, index) => {
    if (index + 1 > 20 && (index + 1) % 10 == 1) {
      console.log(`${index + 1}st choice is ${color}`);
    } else if (index + 1 > 20 && (index + 1) % 10 == 2) {
      console.log(`${index + 1}nd choice is ${color}`);
    } else if (index + 1 > 20 && (index + 1) % 10 == 3) {
      console.log(`${index + 1}rd choice is ${color}`);
    } else {
      console.log(`${index + 1}${ordinal[i]} choice is ${color}`);
      i < 3 ? i++ : i;
    }
  });
};

console.log(
  "Color",
  colorDisplay([
    "Blue ",
    "Green",
    "Red",
    "Orange",
    "Violet",
    "Indigo",
    "Yellow ",
    "Green",
    "Red",
    "Orange",
    "Violet",
    "Indigo",
    "Indigo",
    "Yellow ",
    "Green",
    "Red",
    "Orange",
    "Violet",
    "Indigo",
    "Yellow ",
    "Green",
    "Red",
    "Orange",
    "Violet",
    "Indigo",
    "Indigo",
    "Yellow ",
    "Green",
    "Red",
    "Orange",
    "Violet",
    "Yellow ",
    "Green",
    "Red",
    "Orange",
    "Violet",
    "Indigo",
    "Indigo",
    "Yellow ",
    "Green",
    "Red",
    "Orange",
    "Violet",
    "Indigo",
  ])
);
