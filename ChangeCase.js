// Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input
// 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

const swapCharacterCase = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    str[i] === str[i].toUpperCase()
      ? (result += str[i].toLowerCase())
      : (result += str[i].toUpperCase());
  }
  console.log(result);
  return result;
};

let str3 = "The QUICK Brown Fox toLA";
console.log(swapCharacterCase(str3));
