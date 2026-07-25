var randomNumber1 = Math.floor(Math.random()*5+1);
var randomNumber2 = Math.floor(Math.random()*5+1);

var newImage1 = "./images/dice" + randomNumber1 + ".png";
var newImage2 = "./images/dice" + randomNumber2 + ".png";

document.getElementsByClassName("img1")[0].setAttribute("src", newImage1);
document.getElementsByClassName("img2")[0].setAttribute("src", newImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
} 
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML="Draw!";
}