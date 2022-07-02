var score = 0;
var scoreAdd = 1;
var highScore = 0;

const messageFeild = document.querySelector('.message');
const scoreFeild = document.querySelector('.score');
const highScoreFeild = document.querySelector('.highScore');

function game(slot) {
    const bulletShot = Math.floor(Math.random() * 6) + 1;
    console.log(bulletShot);
    if (bulletShot === +slot) {
        var message = "you die your score was: " + score;
        score = 0;
        scoreAdd = 1; 
    } else {
        var message = "you survived";
        score = scoreAdd;
        scoreAdd *= 2;
        if (score > highScore) {
            highScore = score;
        }
    }

    return message;
}

function update(slot) {
    var message = game(slot);
    messageFeild.textContent = message;
    scoreFeild.textContent = "current Score: " + score;
    highScoreFeild.textContent = "Highest Score: " + highScore;
}

const o1 = document.querySelector('.option1');
const o2 = document.querySelector('.option2');
const o3 = document.querySelector('.option3');
const o4 = document.querySelector('.option4');
const o5 = document.querySelector('.option5');
const o6 = document.querySelector('.option6');

o1.addEventListener('click' , function(){
    update(1);
});
o2.addEventListener('click' , function(){
    update(2);
});
o3.addEventListener('click' , function(){
    update(3);
});
o4.addEventListener('click' , function(){
    update(4);
});
o5.addEventListener('click' , function(){
    update(5);
});
o6.addEventListener('click' , function(){
    update(6);
});