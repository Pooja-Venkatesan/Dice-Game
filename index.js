
var randomNumber1 = Math.floor(Math.random()*6) + 1;
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
console.log(randomNumber2);

var leftImg = document.querySelector(".img1");
leftImg.setAttribute("src" , "images/dice"+randomNumber1+".png");

var rightImg = document.querySelector(".img2");
rightImg.setAttribute("src" , "images/dice"+randomNumber2+".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML="Player 1 Wins! 🏁"; 
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h2").innerHTML="Player 2 Wins! 🏁";
}
else{
    document.querySelector("h2").innerHTML="Draw!";
}