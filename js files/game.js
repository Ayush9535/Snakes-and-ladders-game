
document.getElementById("game-quit").addEventListener("click" , ()=>{
    var ans = confirm("Do you want to quit the Game?")
    if (ans == true) {
        window.location.href = "index.html";
    } 
})

document.getElementById("player1-div").style.backgroundColor = localStorage.getItem("player1color")
document.getElementById("player1-div").innerHTML = localStorage.getItem("player1Name")
document.getElementById("player2-div").style.backgroundColor = localStorage.getItem("player2color")
document.getElementById("player2-div").innerHTML = localStorage.getItem("player2Name")



var dice = document.getElementById("dice")
var diceNumber;

dice.addEventListener("click" , ()=>{
    diceNumber = Math.floor(Math.random()*6)
    dice.src = `./Images/${diceNumber+1}.png`
    start()
})

var player1CurrentPosition = 1;
var player2CurrentPosition = 1;
var turn=1;
var player1RollCount = 0;
var player2RollCount = 0;

function start(){
    if (turn == 1){

        document.getElementById(player1CurrentPosition.toString()).innerHTML = player1CurrentPosition

        player1CurrentPosition += diceNumber+1
        console.log(player1CurrentPosition , "player1")

        document.getElementById(player1CurrentPosition.toString()).innerHTML += '<span id="player1-icon" class="icon"></span>'

        turn = 2;
        document.getElementById("player1-div").style.animation = "none"
        document.getElementById("player2-div").style.animation = "turn 1s infinite ease-in-out"
    }
    else{

        document.getElementById(player2CurrentPosition.toString()).innerHTML = player2CurrentPosition

        player2CurrentPosition += diceNumber+1
        console.log(player2CurrentPosition , "player2")

        document.getElementById(player2CurrentPosition.toString()).innerHTML += '<span id="player2-icon" class="icon"></span>'

        turn = 1;
        document.getElementById("player2-div").style.animation = "none"
        document.getElementById("player1-div").style.animation = "turn 1s infinite ease-in-out"
    }
}
