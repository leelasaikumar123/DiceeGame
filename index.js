let randomNumber1=Math.floor(Math.random()*6)+1;
let randomImage="./images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomImage);
let randomNumber2=Math.floor(Math.random()*6)+1;
let randomImage2="./images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="PLAYER1 WINS";
}
 else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="PLAYER2 WINS";
}
else{
    document.querySelector("h1").textContent="Draw";
}