var randomeNumber1 = Math.floor(Math.random()*6 ) + 1;

var randomeDiceImage = "dice" + randomeNumber1 + ".png";

var randomeImageSource = "images/" + randomeDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomeImageSource);


var randomeNumber2 = Math.floor(Math.random()*6) + 1;

var randomeImageSource2 = "images/dice" + randomeNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomeImageSource2);



if(randomeNumber1 > randomeNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!🏆";
}else if(randomeNumber1 < randomeNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins!🏆";
}else{
    document.querySelector("h1").innerHTML = "Draw!💁🏽🎲"
}