
const backgroundSound = new Audio("./Audio files/gamemusic-6082.mp3")
backgroundSound.play()
backgroundSound.loop = true;
backgroundSound.volume = 0.5

document.getElementById("StartGame").addEventListener("click", function() {
    backgroundSound.play()
    backgroundSound.loop = true;
    backgroundSound.volume = 0.5
    window.location.href = "nickname.html";
});

document.getElementById("Instructions").addEventListener("click" ,  ()=>{
    backgroundSound.play()
    backgroundSound.loop = true;
    backgroundSound.volume = 0.5
    window.location.href = "instructions.html"
})





