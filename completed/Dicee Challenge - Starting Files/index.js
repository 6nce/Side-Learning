let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice 1-6.png

let randomImageSource = "images/" + randomDiceImage; //images/randomDiceImage

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = `images/dice${randomNumber2}.png`

let image2 = document.querySelector(".img2");

image2.setAttribute("src", randomImageSource2);

let gameWinner = (a,b) => {
    if (a ===  b) {
        return "It's a Tie!"
    } else if (a < b) {
        return "Player 2 Wins!"
    }
    else {
        return "Player 1 Wins!"
    }
}

let title = document.querySelector("h1");

title.innerText = gameWinner(randomNumber1, randomNumber2);