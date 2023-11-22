
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

        player1RollCount++

        document.getElementById(player1CurrentPosition.toString()).innerHTML = player1CurrentPosition

        player1CurrentPosition += diceNumber+1
        console.log(player1CurrentPosition , "player1")

        if (player1CurrentPosition > 100){
            player1CurrentPosition -= diceNumber+1

            document.getElementById(player1CurrentPosition.toString()).innerHTML += '<span id="player1-icon" class="icon"></span>'
            document.getElementById("player1-icon").style.backgroundColor = localStorage.getItem("player1color")

            turn = 2;

            document.getElementById("player1-div").style.animation = "none"
            document.getElementById("player2-div").style.animation = "turn 1s infinite ease-in-out"
        }else{
            document.getElementById(player1CurrentPosition.toString()).innerHTML += '<span id="player1-icon" class="icon"></span>'
            document.getElementById("player1-icon").style.backgroundColor = localStorage.getItem("player1color")
            
            if (player1CurrentPosition == 100){
                setTimeout(()=>{

                    localStorage.setItem("winner" , localStorage.getItem("player1Name"))

                    window.location.href = "result.html"
                } , 1200)

                localStorage.setItem("rollCount" , player1RollCount)

                return;
            }

            turn = 2;
            document.getElementById("player1-div").style.animation = "none"
            document.getElementById("player2-div").style.animation = "turn 1s infinite ease-in-out"
        }

    }
    else{

        player2RollCount++

        document.getElementById(player2CurrentPosition.toString()).innerHTML = player2CurrentPosition

        player2CurrentPosition += diceNumber+1
        console.log(player2CurrentPosition , "player2")

        if (player2CurrentPosition > 100){
            player2CurrentPosition -= diceNumber+1

            document.getElementById(player2CurrentPosition.toString()).innerHTML += '<span id="player2-icon" class="icon"></span>'
            document.getElementById("player2-icon").style.backgroundColor = localStorage.getItem("player2color")

            turn = 1;

            document.getElementById("player2-div").style.animation = "none"
            document.getElementById("player1-div").style.animation = "turn 1s infinite ease-in-out"
        }
        else{
            document.getElementById(player2CurrentPosition.toString()).innerHTML += '<span id="player2-icon" class="icon"></span>'
            document.getElementById("player2-icon").style.backgroundColor = localStorage.getItem("player2color")
            
            if (player2CurrentPosition == 100){
                setTimeout(()=>{

                    localStorage.setItem("winner" , localStorage.getItem("player2Name"))

                    window.location.href = "result.html"
                } , 1200)

                localStorage.setItem("rollCount" , player2RollCount)

                return;
            }

            turn = 1;
            document.getElementById("player2-div").style.animation = "none"
            document.getElementById("player1-div").style.animation = "turn 1s infinite ease-in-out"
        }

    }
}