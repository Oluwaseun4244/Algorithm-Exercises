const isPalindrome = function (x) {
  let str = x + "";
  console.log("str", Number(str.split("").reverse().join("")));
  if (str.split("").reverse().join("") === x + "") {
    return true;
  } else {
    return false;
  }
};

console.log("res", isPalindrome(-979));
