// const twoSum = function (nums, target) {

//   for (let i = 0; i < nums.length; i++) {
//         for (let j=i+1; j<nums.length; j++){
//             if (nums[i] + nums[j] == target){
//                 return [i, j]
//             }
//         }
//   }
// };

// console.log("result", twoSum([1, 2, 4]), 3);
// [3,2,4], 6

// const addDigits = function(num) {

//     let numstr = String(num)
//     let numArr = numstr.split("")
//     let newArr = []
//     let sum = 0

//     for (let i=0; i<numArr.length; i++){
//         newArr.push(Number(numArr[i]))
//         sum += newArr[i]
//     }

//     if (sum <= 9){
//        return sum
//     } else {
//        return addDigits(sum)
//     }

// };

// console.log("answer", addDigits(8));

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

// const findMedianSortedArrays = function (nums1, nums2) {
//   let concatenation = nums1.concat(nums2);
//   let sorting = concatenation.sort((a, b) => a - b);

//   let checking = sorting.length / 2;
//   let check2 = sorting.length % 2;

//   if (check2 == 0) {
//     let a = sorting[checking - 1];
//     let b = sorting[checking];

//     return (a + b) / 2;
//   } else {
//     Median = sorting[Math.floor(checking)];
//     return Median;
//   }
// };

// console.log(findMedianSortedArrays([1, 2, 3], [4, 6, 7]));

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

// const longestPalindrome = function (s) {
//   let pal = [];
//   let reverse = [];
//   let result = "";

//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
//       pal = s.substring(i, j).split("");
//       reverse = pal;
//       if (
//         pal.join("") === reverse.reverse().join("") &&
//         pal.length > result.length
//       ) {
//         result = reverse;
//       }
//     }
//   }

//   return result.join("");
// };

// console.log(
//   "result",
//   longestPalindrome(
//     "jrjnbctoqgzimtoklkxcknwmhiztomaofwwzjnhrijwkgmwwuazcowskjhitejnvtblqyepxispasrgvgzqlvrmvhxusiqqzzibcyhpnruhrgbzsmlsuacwptmzxuewnjzmwxbdzqyvsjzxiecsnkdibudtvthzlizralpaowsbakzconeuwwpsqynaxqmgngzpovauxsqgypinywwtmekzhhlzaeatbzryreuttgwfqmmpeywtvpssznkwhzuqewuqtfuflttjcxrhwexvtxjihunpywerkktbvlsyomkxuwrqqmbmzjbfytdddnkasmdyukawrzrnhdmaefzltddipcrhuchvdcoegamlfifzistnplqabtazunlelslicrkuuhosoyduhootlwsbtxautewkvnvlbtixkmxhngidxecehslqjpcdrtlqswmyghmwlttjecvbueswsixoxmymcepbmuwtzanmvujmalyghzkvtoxynyusbpzpolaplsgrunpfgdbbtvtkahqmmlbxzcfznvhxsiytlsxmmtqiudyjlnbkzvtbqdsknsrknsykqzucevgmmcoanilsyyklpbxqosoquolvytefhvozwtwcrmbnyijbammlzrgalrymyfpysbqpjwzirsfknnyseiujadovngogvptphuyzkrwgjqwdhtvgxnmxuheofplizpxijfytfabx"
//   )
// );
// console.log("result", longestPalindrome("babada"));

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

// const reverse = function (x) {
//   let str = x + "";

//   let reversed = str.split("").reverse();

//   let y = reversed.join("");
//   // let check1 =  parseInt(y);
//   let check = parseInt(y)

//   if (check > Math.pow(2, 31)) {
//     return 0;
//   } else {
//     return parseInt(y) * Math.sign(x);
//   }
// };

// function reverseInt(int){
//   const intRev = int.toString().split('').reverse().join('');
//   console.log("rev", intRev);
//   return parseInt(intRev) * Math.sign(int);
// }

// console.log("reversed", reverse(-123));
// console.log("reversed", reverse(-2147483648));
// console.log("reversed", reverse(1534236469));

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
//   hasEnoughKarma: "",
//   canUpVote: "Can't upVote"
// }

// user.karma >= 100 ? user.hasEnoughKarma = true : user.hasEnoughKarma
// user.hasEnoughKarma >= 100 || user.isModerator ? user.canUpVote = "user can upVote": user.canUpVote

// console.log("canUpVote", user.canUpVote);

// function electionsWinners(votes, k) {
//   let arr = [];

//   let maxVote = Math.max(...votes);

//   for (let j = 0; j < votes.length; j++) {
//     if (votes[j] + k == maxVote) {
//       return "there is a possibility for a tie";
//     } else if (votes[j] + k > maxVote) {
//       arr.push(votes[j]);
//     }
//   }

//   return arr.length + "person(s) can win the elction";
// }

// console.log(electionsWinners([2, 3, 5, 2], 1));

// const checkPrime = () => {
//   let prime = [];
//   let checkNum = [2, 3, 5, 7, 11];

//   for (let num = 3; num < 50; num++) {
//     let isPrime = true
//     // if (!checkNum.some(check => num % check === 0 && num !== check)) {
//     //   prime.push(num)
//     // }

//     for (let i = 0; i< checkNum.length; i++) {
//       if (num % checkNum[i] === 0 && num !== checkNum[i])  {
//         isPrime = false
//         break;
//       }
//     }
//     if (isPrime) {
//       prime.push(num)
//     }
//   }
//   console.log(prime)
// };

// checkPrime()

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

// const isPalindrome = function(x) {
//     let str = x + ""
//   console.log("str", Number(str.split("").reverse().join("")));
//     if (str.split("").reverse().join("") === x + ""){
//       return true
//     } else {
//       return false
//     }



// };

// console.log("res", isPalindrome(-979));


let bracket = "((())"
// let bracket = "()((()()"

console.log("bracket", bracket.split(")"));
