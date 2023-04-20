
        //counters for keeping the score
        let user = 0;
        let computer = 0;
        const buttons = document.querySelectorAll('button.btn-square');
        const modal = document.getElementById('endgameModal');
        const overlay = document.getElementById('overlay');
        const endgameMsg = document.getElementById('endgameMsg');
      

        //computer values
        const picks = ["rock","paper","scissors"];
        
        // function that will pick a random answer for the computer
        function getComputerChoice(){
            let pick = Math.floor(Math.random()*picks.length);
            return picks[pick];
        }
        //this is the game
        function playRound(playerSelection){
            let computerSelection = getComputerChoice();
             let result = "";
        if ((playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
        (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock')) {
        
        user += 1;
        result = (playerSelection + ' beats ' + computerSelection);
        document.getElementById('game-info').innerText = 'You won.';
        document.getElementById('player').innerText = 'PLAYER: '+user;
        document.getElementById('computer').innerText = 'COMPUTER: '+computer;

        if (user == 5) {
            modal.classList.add('active');
            overlay.classList.add('active');
            (endgameMsg.textContent = 'You Woooon');
            
        }
        }

        else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        result = ('You both chose ' + playerSelection);
        document.getElementById('game-info').innerText = 'It'+'s'+' a tie, Try harder.';
        }
         else {
            computer += 1;
            result = (computerSelection + ' beats ' + playerSelection);
            document.getElementById('game-info').innerText = 'You lost.';
            document.getElementById('player').innerText = 'PLAYER: '+user;
            document.getElementById('computer').innerText = 'COMPUTER: '+computer;
            if (computer == 5) {
                modal.classList.add('active');
                overlay.classList.add('active');
                (endgameMsg.textContent = 'You Lost...');
            }
        }
            document.getElementById('player').innerText = "Player: "+user;
            document.getElementById('computer').innerText ="Computer: " + computer;
            document.getElementById('set-message').innerText = result;
          
            switch(playerSelection){
                case 'rock':  document.getElementById('player-sign').innerText = '✊';
                break
                case 'paper':  document.getElementById('player-sign').innerText = '✋';
                break
                case 'scissors':  document.getElementById('player-sign').innerText = '✌️';
                break
            }
            switch(computerSelection){
                case 'rock':  document.getElementById('computer-sign').innerText = '✊';
                break
                case 'paper':  document.getElementById('computer-sign').innerText = '✋';
                break
                case 'scissors':  document.getElementById('computer-sign').innerText = '✌️';
                break
            }

            return;
        }   
       
    function playAgain(){
        modal.classList.remove('active');
        overlay.classList.remove('active');
        user = 0;
        computer = 0;
        result = '';
        document.getElementById('game-info').innerText = 'What'+"'"+'s' + 'your choice?';
        document.getElementById('set-message').innerText = 'First to 5, wins the game';
        document.getElementById('player-sign').innerText = '❔';
        document.getElementById('computer-sign').innerText = '❔';
        document.getElementById('player').innerText = 'PLAYER: '+user;
        document.getElementById('computer').innerText = 'COMPUTER: '+computer;
    }

    document.getElementById('restartBtn').addEventListener("click", playAgain);

    buttons.forEach(button =>{
        button.addEventListener('click', function(){
            playRound(button.value);
        })
    })






      