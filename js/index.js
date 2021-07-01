// First Player

var randomNumber1 = Math.floor(Math.random() *6) +1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" +randomDiceImage;

var player1Image = document.querySelector(".img1");

player1Image.setAttribute("src", randomImageSource);



// Second Player

var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomImageSource2 = "images/dice" +randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Won";

}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Won";

}else{
    document.querySelector("h1").textContent = "Draw";
    
}


