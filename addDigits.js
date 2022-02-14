const addDigits = function(num) {

    let numstr = String(num)
    let numArr = numstr.split("")
    let sum = 0

    for (let i=0; i<numArr.length; i++){
        sum += Number(numArr[i])

    }

    if (sum <= 9){
       return sum
    } else {
       return addDigits(sum)
    }

};

console.log("answer", addDigits(8));
console.log("answer", addDigits(48));