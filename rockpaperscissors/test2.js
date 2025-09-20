let k = Math.random();

let computerChoice;
        if(k<0.33) {
            computerChoice = "Rock"
        }
        else if(k>0.33 && k <0.66) {
            computerChoice = "Paper"
        }
        else {
            computerChoice = "Scissor"
        }

console.log(computerChoice);