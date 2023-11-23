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
    var player1nick = document.getElementById("player1nick").value
    var player2nick = document.getElementById("player2nick").value

    localStorage.setItem("player1Name" , player1)
    localStorage.setItem("player2Name" , player2)
    localStorage.setItem("player1NickName" , player1nick)
    localStorage.setItem("player2NickName" , player2nick)

    if (player1 == "" || player2 == ""){
        alert("Enter Name for player..!!")
    }
    else if (player1nick == "" || player2nick == ""){
        alert("Enter Nickname for player..!!")
    }else{
        window.location.href = "color.html"
    }
})