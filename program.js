function backtonum(a){
            switch(a){
                case "rock": return 1;
                case "paper": return 2;
                default: return 3;
            }
        }
        function numtochoice(a){
            switch(a){
                case 1: return "rock";
                case 2: return "paper";
                default: return "scissors";
            }
        }

        function getComputerChoice(){
            return Math.floor((Math.random()*3)+1);
        }

        function getHumanChoice(){
            return prompt("Enter Rock, Paper,or Scissors").toLocaleLowerCase();
        }

        function playRound(humanChoice,computerChoice){
            if(humanChoice==computerChoice){
                whowon.textContent ="Tie";
            }
            else if((humanChoice == 2 && computerChoice == 1) || (humanChoice ==1 && computerChoice == 2)){

                if(humanChoice == 1){
                    computerScore++;
                    whowon.textContent ="Computer Won";
                }
                else {
                    humanScore++;
                    whowon.textContent ="Player Won";
                }
            }
            else if((humanChoice == 3 && computerChoice == 1) || (humanChoice == 1 && computerChoice == 3)){

                if(humanChoice == 1){
                    humanScore++;
                    whowon.textContent ="Player Won";
                }
                else {
                    computerScore++;
                    whowon.textContent ="Computer Won";
                }
            }
            else if((humanChoice == 3 && computerChoice == 2) || (humanChoice == 2 && computerChoice == 3)){
 
                if(humanChoice == 2){
                    computerScore++;
                    whowon.textContent ="Computer Won";
                }
                else {
                    humanScore++;
                    whowon.textContent ="Player Won";
                }
            }
            return;
        }

        function switching(){
            if(rock.style.visibility == "visible"){
                rock.style.visibility = "hidden";
                paper.style.visibility ="hidden";
                scissor.style.visibility = "hidden";
            }
            else{
                rock.style.visibility = "visible";
                paper.style.visibility ="visible";
                scissor.style.visibility = "visible";
            }
            return;
        }

        function TrueWinner(){
            if(humanScore>computerScore){
                whowon.textContent="The True Winner of this game is Player!!";
            }
            else{
                whowon.textContent="The True Winner of this game is Computer!!";
            }
            return;
        }

        function endgame(){
            rock.style.visibility = "visible";
            paper.style.visibility ="visible";
            scissor.style.visibility = "visible";
            switching();
            TrueWinner();
            restart.style.display = 'block';
            restart.addEventListener("click", () =>{
                whowon.textContent="";
                choice.textContent="";
                humanScore=0;
                computerScore=0;
                rounds=1;
                choice.textContent="";
                round.textContent= `<Round: ${rounds++}>  Player Score:${humanScore}    Computer Score: ${computerScore}`;
                restart.style.display = 'none';
                rock.style.visibility = "hidden";
                paper.style.visibility ="hidden";
                scissor.style.visibility = "hidden";
                switching();
                return;
            });
        }

        let winningscore = 5;
        let humanScore = 0;
        let computerScore = 0;
        let computers;
        let players;
        let rounds = 1;

        function gamestart(){
            computers = getComputerChoice();
            choice.textContent=`You pick ${players}, Computer pick ${numtochoice(computers)}`;
            playRound(backtonum(players),computers);
            round.textContent= `<Round: ${rounds++}>  Player Score:${humanScore}    Computer Score: ${computerScore}`;
        }

        const container = document.querySelector("#container");
        const round = document.querySelector("#Round");
        const rock = document.getElementById("Rock");
        const paper = document.getElementById("Paper");
        const scissor = document.getElementById("Scissors");
        const choice = document.querySelector("#choice");
        const whowon = document.querySelector("#whowon");
        const restart = document.getElementById("restart");


        rock.addEventListener("click", () => {
            if((humanScore == winningscore) || (computerScore == winningscore)){
                endgame();
            }
            else{
                players="rock";
                gamestart();
            }
            
        });

        paper.addEventListener("click", () => {
            if((humanScore == winningscore) || (computerScore == winningscore)){
                endgame();
            
            }
            else{
               players="paper";
               gamestart(); 
            }
            
        });

        scissor.addEventListener("click", () => {
            if((humanScore == winningscore) || (computerScore == winningscore)){
                endgame();
            }
            else{
                players="scissors";
                gamestart();
            }
           
        });

        

        if(humanScore > computerScore){
            console.log("Winner is Human");
        }
        else if(humanScore < computerScore){
            console.log("Winner is Computer");
        }
        else{
            console.log("No Winner, Tie!");
        }
