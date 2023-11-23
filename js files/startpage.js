
const backgroundSound = new Audio("./Audio files/gamemusic-6082.mp3")
backgroundSound.play()
backgroundSound.loop = true;
backgroundSound.volume = 0.5

document.getElementById("StartGame").addEventListener("click", function() {
    // document.getElementById("StartGame").style.animation = "nextPage 4s ease-in-out"
    // document.getElementById("StartGame").innerHTML = ""
    setTimeout(()=>{
        window.location.href = "nickname.html";

    } , 10)
});

document.getElementById("Instructions").addEventListener("click" ,  ()=>{
    window.location.href = "instructions.html"
})





