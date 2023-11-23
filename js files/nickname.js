const backgroundSound = new Audio("./Audio files/gamemusic-6082.mp3")
backgroundSound.play()
backgroundSound.loop = true;
backgroundSound.volume = 0.5

document.getElementById("nickname-back").addEventListener("click" ,  ()=>{
    window.location.href = "index.html"
})

// var player1 = document.getElementById("player1").value
// var player2 = document.getElementById("player2").value



document.getElementById("nickname-next").addEventListener("click" ,  ()=>{
    var player1 = document.getElementById("player1").value
    var player2 = document.getElementById("player2").value

    localStorage.setItem("player1Name" , player1)
    localStorage.setItem("player2Name" , player2)

    if (player1 == "" || player2 == ""){
        alert("Enter Nickname for player..!!")
    }else{
        window.location.href = "color.html"
    }
})