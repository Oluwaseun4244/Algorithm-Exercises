function electionsWinners(votes, k) {
    let arr = [];
  
    let maxVote = Math.max(...votes);
  
    for (let j = 0; j < votes.length; j++) {
      if (votes[j] + k == maxVote) {
        return "there is a possibility for a tie";
      } else if (votes[j] + k > maxVote) {
        arr.push(votes[j]);
      }
    }
  
    return arr.length + "person(s) can win the elction";
  }
  
  console.log(electionsWinners([2, 3, 5, 2], 1));