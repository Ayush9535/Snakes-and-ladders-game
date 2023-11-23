const backgroundSound = new Audio("./Audio files/gamemusic-6082.mp3")
backgroundSound.play()
backgroundSound.loop = true;
backgroundSound.volume = 0.5

document.getElementById("playagain").addEventListener("click" ,  ()=>{
    window.location.href = "nickname.html"
})
document.getElementById("quit").addEventListener("click" ,  ()=>{
    window.location.href = "index.html"
})

document.getElementById("winner-name").innerHTML = localStorage.getItem("winner")
document.getElementById("rollCount").innerHTML = localStorage.getItem("rollCount")