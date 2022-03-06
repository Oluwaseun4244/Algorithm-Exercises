//you sell your good at 5, the array contains order in which customer brings money, check if you can 
//provide change for customer

//let sample = [5, 10, 5, 5, 10]; // [10,5,10]
//let sample2 = [5, 10, 5, 5, 10, 20]; // [10,20]
//let sample3 = [15, 10, 5, 5, 10, 20, 15]; // false because there is no change to provide for the first customer

//[10,5,10]

const provideChange = (bills) => {
  let purse = [];
  for (let i = 0; i < bills.length; i++) {
    if (bills[0] !== 5) {
      return false;
    }

    if (bills[i] === 5) {
      purse.push(bills[i]);
    } else {
      let change = bills[i] - 5;
      let changeSum = 0;

      for (let j = purse.length - 1; j >= 0; j--) {
        changeSum += purse[j];

        if (changeSum == change) {
          purse[j] = bills[i];
          changeSum = 0;
          //once change has been found from the purse, break away from the loop to the parent loop
          break;
        } else {
          purse.splice(j, 1);
        }
      }
    } 

    if (!purse.length){
      return false
    }
  }

  return purse;
};


console.log("Result is", provideChange([5,5, 10, 5, 5, 10, 20]));
console.log("Result is", provideChange([5,500, 10, 5, 5, 10, 20]));
console.log("Result is", provideChange([5, 10, 5, 5, 10, 20,35]));
console.log("Result is", provideChange([5, 5, 5, 5, 10]));

