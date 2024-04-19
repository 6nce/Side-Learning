let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userPattern = [];
let userChosenColor = "";
let level = 0;
let started = false;

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

$(".btn").click(function(){
    userChosenColor = this.id;
    userPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userPattern.length-1);
})




function checkAnswer(currentLevel) {
        if (gamePattern[currentLevel] === userPattern[currentLevel]) {
            if (gamePattern.length === userPattern.length){
                setTimeout(function () {
                    nextSequence();
                }, 1000);
            }
        } else {
            let wrongSound = new Audio("sounds/wrong.mp3");
            wrongSound.play();
            $("h1").text("Game Over, Press Any Key to Restart");
            $("body").addClass("game-over");
            setTimeout(() => {
                $("body").removeClass("game-over");
            }, 200)
            startOver();
            }
        }

function nextSequence() {
    userPattern = [];
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeToggle().fadeToggle("fast");
    playSound(randomChosenColor)
    level = level + 1;
    $("h1").text("Level " + level);
}


function playSound(name) {
    let colorSound = new Audio("sounds/" + name + ".mp3");
    colorSound.play();
}


function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

let animatePress = (currentColor) => {
    $("." + currentColor).addClass("pressed");
    setTimeout(() => {
        $("." + currentColor).removeClass("pressed")
    }, 100
    )
}