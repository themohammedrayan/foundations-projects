let RockPaperScissor = function(num) {
    console.log("Welcome to Rock Paper Scissor")
    let humanScore = 0;
    let computerScore = 0;
    for(let i=0;i<num;i++) { 
        let k = Math.random();
        let computerChoice;
        let humanChoice = prompt("Select Rock,Paper or Scissor:").toLowerCase();
        if(k<0.33) {
            computerChoice = "rock";
        }
        else if(k>0.33 && k <0.66) {
            computerChoice = "paper";
        }
        else {
            computerChoice = "scissor";
        }

        if((computerChoice==='rock'&&humanChoice==='paper')||(computerChoice==='paper'&&humanChoice==='scissor')||(computerChoice==='scissor'&&humanChoice==='rock')) {
            humanScore+=1;
        }
        if((computerChoice==='rock'&&humanChoice==='scissor')||(computerChoice==='paper'&&humanChoice==='rock')||(computerChoice==='scissor'&&humanChoice==='paper')) {
            computerScore+=1;
        }
        console.log("Computer Choice: ",computerChoice);
        console.log("Human Choice: ",humanChoice);
        console.log("Computer Score: ",computerScore," - Human Score: ",humanScore);
    }
    if (humanScore>computerScore) {
        return "Human Wins!";
    }
    else if (humanScore<computerScore) {
        return "Computer Wins!";
    }
    else if (humanScore===computerScore) {
        return "Its a Tie!"
    }
}

console.log(RockPaperScissor(3))