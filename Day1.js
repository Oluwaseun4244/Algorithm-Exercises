

// let str = "Bob is a great guy"
// let splitedStr = str.split(" ")
// let char =  Math.round(splitedStr.length / 2)

// // console.log("result", splitedStr[char]);

// console.log("let me see", str.includes("g"));

// const capFirstLetter = (str) => {
//   let splitted = str.split(" ");
//   let lastIndex = splitted.length - 1;
//   // console.log("how far", splitted);

//   let res = splitted[lastIndex];
//   let original = splitted[lastIndex][0];
//   let res2 = splitted[lastIndex][0].toUpperCase();
//   let answer = res.replace(original, res2);

//   // let reverse = splitted.join(" ")
//   splitted[lastIndex] = answer;

//   return splitted.join(" ")
// };

// console.log(
//   "my result is:",
//   capFirstLetter("This is ali, ali is simibi brother")
// );


// const addTwoNumbers = function (l1, l2) {
//   let arr1 = [];
//   let arr2 = [];
//   let result = [];

//   for (let i = l1.length - 1; i >= 0; i--) {
//     arr1.push(l1[i]);
//   }

//   for (let j = l2.length - 1; j >= 0; j--) {
//     arr2.push(l2[j]);
//   }

//   let joinedL1 = Number(arr1.join(""));
//   let joinedL2 = Number(arr2.join(""));
//   let adding = joinedL1 + joinedL2;
//   let str = adding + "";

//   for (let k = str.length - 1; k >= 0; k--) {
//     result.push(Number(str[k]));
//   }

//   return result;
// };

// console.log(addTwoNumbers([2,4,3], [5,6,4]));
// console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));



// function addLinkedList (a, b){
//   let number_a  = "";
//   let number_b  = "";

//   let looper = a;
//   do{
//     number_a = looper.val + number_a
//     looper = looper.next
//   }while(looper !== null)

//   looper = b
//   while (looper !== null){
//     number_b = looper.val + number_b
//     looper = looper.next
//   }

//   let max_l = Math.max(number_a.length, number_b.length)
//   let small_string = number_a.length number_b.length
//   console.log(number_b.format())

//   const added = ((Number(number_a) + Number(number_b)) + "")
//   console.log(added)
//   let answer = {}
//   let next = null
//   for(let i = 0; i< added.length; i++){
//     answer.val = added[i]
//     answer.next = next
//     next = {...answer}
//     console.log(next);
//   }
//   return answer
// }

// let a = {"val":2,"next":{"val":4,"next":{"val":3,"next":null}}}
// let b = {"val":5,"next":{"val":6,"next":{"val":4,"next":null}}}

// a = {"val":2,"next":{"val":4,"next":{"val":9,"next":null}}}
// b = {"val":5,"next":{"val":6,"next":{"val":4,"next":{"val":9,"next":null}}}}
// console.log(addLinkedList(a, b))



// let isUser = true

// let shoppingCart  = ""

// isUser ? shoppingCart = "iPad" : shoppingCart
// console.log("shopping cart", shoppingCart);

// const age = 11
// let allowAccess = false

// age >= 18 ? allowAccess = true : allowAccess

// console.log("allowAccess", allowAccess);

// let time = new Date().getHours()

// switch (true) {
//   case time < 12 :
//     console.log("Good morning")
//     break;
//   case time < 16 :
//     console.log("Good Afternoon")
//     break;
//   case time < 20 :
//     console.log("Good Evening")
//     break;
//     default:
//       console.log("go to bed")

// }

// let user = {
//   karma: 10,
//   isModerator: true,
//   hasEnoughKarma: false,
//   canUpVote: "Can't upVote"
// }

// user.karma >= 100 ? user.hasEnoughKarma = true : user.hasEnoughKarma
// user.hasEnoughKarma || user.isModerator ? user.canUpVote = "user can upVote": user.canUpVote

// console.log("canUpVote", user.canUpVote);





// const divide = function (dividend, divisor) {
//   let a = Math.abs(dividend);
//   const b = Math.abs(divisor);
//   let count = a >= b ? 1 : 0;
//   // console.log(b);

//   for (i = a; i >= 0; i--) {
//     let minus = a - b;
//     console.log("jh");
//     if (minus >= b) {
//       count++;
//       a = Math.floor(minus);
//     } else {
//       return count * Math.sign(divisor) * Math.sign(dividend);
//     }
//   }
// };

// // console.log("divide", divide(10, 3));
// // console.log("divide", divide(-1, 1));
// console.log("divide", divide(-2147483648, -1));






// let bracket = "((())"
// // let bracket = "()((()()"

// console.log("bracket", bracket.split(")"));
