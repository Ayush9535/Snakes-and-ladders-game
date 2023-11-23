// Storing the locations of snakes and ladders 
SnakeLocations = [
    {head:32,tail:10},
    {head:62,tail:18},
    {head:69,tail:36},
    {head:97,tail:78}   
]

LaddersLocations = [
    {from:6,to:16},
    {from:21,to:42},
    {from:28,to:76},
    {from:45,to:63},
    {from:50,to:67},
    {from:71,to:92},
    {from:80,to:98}
]

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
var diceAudio = new Audio("./Audio files/dice-142528.mp3")
var ladderAudio = new Audio("./Audio files/Ladder.wav")
var snakeAudio = new Audio("./Audio files/SnakeBite.wav")

document.getElementById("dicebtn").addEventListener("click" , ()=>{
    diceAudio.play()
    document.getElementById("dicebtn").disabled = true
    diceNumber = Math.floor(Math.random()*6)
    dice.src = `./Images/${diceNumber+1}.png`
    start()
    diceAudio.addEventListener("ended" , function(){
        document.getElementById("dicebtn").disabled = false
    })
})

var player1CurrentPosition = 1;
var player2CurrentPosition = 1;
var turn=1;
var player1RollCount = 0;
var player2RollCount = 0;
var samePosition = false;

function start(){

    // if player1's turn is there 
    if (turn == 1){

        player1RollCount++

        // checks if position was same 
        if (samePosition == true){
            document.getElementById(player1CurrentPosition.toString()).innerHTML = player1CurrentPosition + '<span id="player2-icon" class="icon"></span>'
            document.getElementById("player2-icon").style.backgroundColor = localStorage.getItem("player2color")

            samePosition = false;

        }else{
            document.getElementById(player1CurrentPosition.toString()).innerHTML = player1CurrentPosition
        }

        // gets random no from dice and adds it to the position to move 
        player1CurrentPosition += diceNumber+1
        // console.log(player1CurrentPosition , "player1")

        // condition to check if position is going greater than 100
        if (player1CurrentPosition > 100){
            player1CurrentPosition -= diceNumber+1

            document.getElementById(player1CurrentPosition.toString()).innerHTML += '<span id="player1-icon" class="icon"></span>'
            
            // checking if both player have same position 
            checkSamePosition()

             // change turn 
            turn = 2;

            document.getElementById("player1-div").style.animation = "none"
            document.getElementById("player2-div").style.animation = "turn 1s infinite ease-in-out"
        }else{
            
            // adding icon to current position of player 
            document.getElementById(player1CurrentPosition.toString()).innerHTML += '<span id="player1-icon" class="icon"></span>'

            checkSamePosition()
            
            // after win 
            if (player1CurrentPosition == 100){
                var winSound = new Audio("./Audio files/Winning sound.mp3")
                winSound.play()
                setTimeout(()=>{

                    localStorage.setItem("winner" , localStorage.getItem("player1Name"))

                    window.location.href = "result.html"
                } , 1000)

                localStorage.setItem("rollCount" , player1RollCount)

                return;
            }


            if (checksnake(player1CurrentPosition) != -1){
                let Snakeindex = checksnake(player1CurrentPosition)
                snakeAudio.play()
                // remove the icon 
                document.getElementById("player1-icon").parentNode.removeChild(document.getElementById("player1-icon"))
                // update the position
                // console.log(Snakeindex) 
                console.log(player1CurrentPosition," old player1")
                player1CurrentPosition = SnakeLocations[Snakeindex].tail
                console.log(player1CurrentPosition,"new player1")
                // add the icon 
                document.getElementById(player1CurrentPosition.toString()).innerHTML += '<span id="player1-icon" class="icon"></span>'
                document.getElementById("player1-icon").style.backgroundColor = localStorage.getItem("player1color")


            }else if (checkladder(player1CurrentPosition) != -1){
                let ladderIndex = checkladder(player1CurrentPosition)
                ladderAudio.play()
                // remove the icon 
                document.getElementById("player1-icon").parentNode.removeChild(document.getElementById("player1-icon"))
                // update the position
                console.log(ladderIndex) 
                console.log(player1CurrentPosition," old player1")
                player1CurrentPosition = LaddersLocations[ladderIndex].to
                console.log(player1CurrentPosition,"new player1")
                // add the icon
                document.getElementById(player1CurrentPosition.toString()).innerHTML += '<span id="player1-icon" class="icon"></span>'
                document.getElementById("player1-icon").style.backgroundColor = localStorage.getItem("player1color")

            }

             // change turn 
            turn = 2;
            document.getElementById("player1-div").style.animation = "none"
            document.getElementById("player2-div").style.animation = "turn 1s infinite ease-in-out"
        }

    }


    else{

        player2RollCount++

        if (samePosition == true){
            // console.log("hello")
            document.getElementById(player2CurrentPosition.toString()).innerHTML = player2CurrentPosition + '<span id="player1-icon" class="icon"></span>'
            document.getElementById("player1-icon").style.backgroundColor = localStorage.getItem("player1color")


            samePosition = false;

        }else{
            document.getElementById(player2CurrentPosition.toString()).innerHTML = player2CurrentPosition
        }

        player2CurrentPosition += diceNumber+1
        // console.log(player2CurrentPosition , "player2")

        if (player2CurrentPosition > 100){
            player2CurrentPosition -= diceNumber+1

            document.getElementById(player2CurrentPosition.toString()).innerHTML += '<span id="player2-icon" class="icon"></span>'
            // document.getElementById("player2-icon").style.backgroundColor = localStorage.getItem("player2color")

            checkSamePosition()

             // change turn 
            turn = 1;

            document.getElementById("player2-div").style.animation = "none"
            document.getElementById("player1-div").style.animation = "turn 1s infinite ease-in-out"
        }
        else{
            // document.getElementById("player2-icon").style.backgroundColor = localStorage.getItem("player2color")
        
            document.getElementById(player2CurrentPosition.toString()).innerHTML += '<span id="player2-icon" class="icon"></span>'

            checkSamePosition()
            
            if (player2CurrentPosition == 100){
                var winSound = new Audio("./Audio files/Winning sound.mp3")
                winSound.play()
                setTimeout(()=>{

                    localStorage.setItem("winner" , localStorage.getItem("player2Name"))

                    window.location.href = "result.html"
                } , 1000)

                localStorage.setItem("rollCount" , player2RollCount)

                return;
            }

            

            if (checksnake(player2CurrentPosition) != -1){
                let Snakeindex1 = checksnake(player2CurrentPosition)
                snakeAudio.play()
                // remove the icon 
                document.getElementById("player2-icon").parentNode.removeChild(document.getElementById("player2-icon"))
                // update the position
                console.log(Snakeindex1) 
                console.log(player2CurrentPosition," old player2")
                player2CurrentPosition = SnakeLocations[Snakeindex1].tail
                console.log(player2CurrentPosition,"new player2")
                // add the icon
                document.getElementById(player2CurrentPosition.toString()).innerHTML += '<span id="player2-icon" class="icon"></span>'
                document.getElementById("player2-icon").style.backgroundColor = localStorage.getItem("player2color")


            }else if (checkladder(player2CurrentPosition) != -1){
                let ladderIndex1 = checkladder(player2CurrentPosition)
                ladderAudio.play()
                // remove the icon 
                document.getElementById("player2-icon").parentNode.removeChild(document.getElementById("player2-icon")) 
                // update the position 
                console.log(ladderIndex1)
                console.log(player2CurrentPosition," old player2")
                player2CurrentPosition = LaddersLocations[ladderIndex1].to
                console.log(player2CurrentPosition,"new player2")
                // add the icon
                document.getElementById(player2CurrentPosition.toString()).innerHTML += '<span id="player2-icon" class="icon"></span>'
                document.getElementById("player2-icon").style.backgroundColor = localStorage.getItem("player2color")

            }

            // change turn 
            turn = 1;
            document.getElementById("player2-div").style.animation = "none"
            document.getElementById("player1-div").style.animation = "turn 1s infinite ease-in-out"
        }

    }
}


function checksnake(position){
    
    for (let i=0 ; i<SnakeLocations.length ; i++){
        if (SnakeLocations[i].head == position){
            return i
        }
    }
    return -1
    
}

function checkladder(position){
    
    for (let i=0 ; i<LaddersLocations.length ; i++){
        if (LaddersLocations[i].from == position){
            return i
        }
    }   
    return -1

}

function checkSamePosition(){
    if (player1CurrentPosition == player2CurrentPosition){

        samePosition = true
        if (turn == 1){
            document.getElementById("player2-icon").style.background = `linear-gradient(to right,
                ${localStorage.getItem("player1color")} 0%,
                ${localStorage.getItem("player1color")} 50%,
                ${localStorage.getItem("player2color")} 50%,
                ${localStorage.getItem("player2color")} 100%)`
        }else{
            document.getElementById("player1-icon").style.background = `linear-gradient(to right,
                ${localStorage.getItem("player1color")} 0%,
                ${localStorage.getItem("player1color")} 50%,
                ${localStorage.getItem("player2color")} 50%,
                ${localStorage.getItem("player2color")} 100%)`
        }
    }else{
        samePosition = false
        if (turn == 1){
            document.getElementById("player1-icon").style.backgroundColor = localStorage.getItem("player1color")
        }else{
            document.getElementById("player2-icon").style.backgroundColor = localStorage.getItem("player2color")
        }
    }
}