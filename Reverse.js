const reverse = function (x) {
    let str = x + "";
  
    let reversed = str.split("").reverse();
  
    let y = reversed.join("");
    // let check1 =  parseInt(y);
    let check = parseInt(y)
  
    if (check > Math.pow(2, 31)) {
      return 0;
    } else {
      return parseInt(y) * Math.sign(x);
    }
  };
  
//   function reverseInt(int){
//     const intRev = int.toString().split('').reverse().join('');
//     console.log("rev", intRev);
//     return parseInt(intRev) * Math.sign(int);
//   }
  
  console.log("reversed", reverse(-123));
  console.log("reversed", reverse(-2147483648));
  console.log("reversed", reverse(1534236469));