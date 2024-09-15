
// let score = {
//     wins: 0,
//     losses: 0,
//     ties: 0,
// }

let score = JSON.parse(localStorage.getItem('score'))||
{
    wins: 0,
    losses: 0,
    ties: 0
};

upDateScore();



function pickComputerMove() {
    let ComputerMove;
    let randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1/3 ) {
        ComputerMove = 'rock';   
    }else if (randomNumber >= 1/3 && randomNumber <2/3){
        ComputerMove = 'paper';
    }else if (randomNumber >= 2/3 && randomNumber <3/3){
        ComputerMove= 'scissors';
    }
    
    
    return ComputerMove;
    
}

let isAutoPlaying = false;
let intervalId;
function autoPlay() {
    if (!isAutoPlaying){
        intervalId = setInterval(function(){
         const playerMove = pickComputerMove();
    
            playGame(playerMove)
        }, 1000)
        isAutoPlaying = true;
    }else{
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
    

}

function playGame(playerMove) {
    let ComputerMove = pickComputerMove();
    let result;


    if (playerMove === 'rock') {
        if (ComputerMove === 'rock') {
            result = 'Tie';
        }else if (ComputerMove === 'paper') {
            result = 'You Lose';
    }else if (ComputerMove === 'scissors') {
            result = 'You Win';
    }
    }else if(playerMove === 'paper') {
        if (ComputerMove === 'rock') {
            result = 'You Win';
        }else if (ComputerMove === 'paper') {
            result = 'Tie';
    }else if (ComputerMove === 'scissors') {
            result = 'You Lose';
    }
    }else if(playerMove ===  'scissors'){
        if (ComputerMove === 'rock') {
            result = 'You Lose';
        }else if (ComputerMove === 'paper') {
            result = 'You Win';
    }else if (ComputerMove === 'scissors') {
            result = 'Tie';
    }
    }

    if (result === 'You Win') {
        score.wins++;
    }else if (result === 'You Lose') {
        score.losses++;
    }else if (result === 'Tie'){
        score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    upDateScore();
    

    document.querySelector('.js-moves').innerHTML =
     `you picked <img src="emojis/${playerMove}-emoji.png" alt="${playerMove}" class="move-icon"> computer picked <img src="emojis/${ComputerMove}-emoji.png" alt="" class="move-icon">`
    
    document.querySelector('.js-result').innerHTML = `${result}!`

//     alert(`you picked ${playerMove}, computer picked ${ComputerMove}. 
// you ${result}
// Wins: ${score.wins}  losses: ${score.losses}  Ties: ${score.ties}`);

} 
function upDateScore() {

    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}  losses: ${score.losses}  Ties: ${score.ties}`
}



