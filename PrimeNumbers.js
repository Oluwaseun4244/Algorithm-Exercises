const checkPrime = () => {
    let prime = [];
    let checkNum = [2, 3, 5, 7, 11];
  
    for (let num = 3; num < 50; num++) {
      let isPrime = true
      // if (!checkNum.some(check => num % check === 0 && num !== check)) {
      //   prime.push(num)
      // }
  
      for (let i = 0; i< checkNum.length; i++) {
        if (num % checkNum[i] === 0 && num !== checkNum[i])  {
          isPrime = false
          break;
        }
      }
      if (isPrime) {
        prime.push(num)
        if (num > 11){
          checkNum.push(num)
        }
      }
    }
    console.log(prime)
  };
  
  checkPrime()


