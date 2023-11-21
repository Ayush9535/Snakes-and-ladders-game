
document.getElementById("game-quit").addEventListener("click" , ()=>{
    var ans = confirm("Do you want to quit the Game?")
    if (ans == true) {
        window.location.href = "index.html";
    } 
})

document.getElementById("player1-div").innerHTML = localStorage.getItem("player1Name")
document.getElementById("player2-div").innerHTML = localStorage.getItem("player2Name")

var dice = document.getElementById("dice")
var diceNumber;

dice.addEventListener("click" , ()=>{
    diceNumber = Math.floor(Math.random()*6)
    dice.src = `./Images/${diceNumber+1}.png`
})