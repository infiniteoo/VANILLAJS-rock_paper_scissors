const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

const scoreboard = {
    player: 0,
    computer: 0
};

// play game
function play(e){
    console.log(e.target.id);


}


// event listeners
choices.forEach(choice => choice.addEventListener('click', play));
