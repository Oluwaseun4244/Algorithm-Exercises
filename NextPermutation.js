const nextPermutation = function(numsArr) {
    val = numsArr[numsArr.length-1]

    numsArr.splice(1,0, val)
    numsArr.pop();

    console.log(numsArr)
    return numsArr

};

nextPermutation([1,2,3])