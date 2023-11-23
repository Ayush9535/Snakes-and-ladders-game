const backgroundSound = new Audio("./Audio files/gamemusic-6082.mp3")
backgroundSound.play()
backgroundSound.loop = true;
backgroundSound.volume = 0.5

document.getElementById("instruct-back").addEventListener("click" ,  ()=>{
    window.location.href = "index.html"
})