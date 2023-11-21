document.getElementById("game-quit").addEventListener("click" , ()=>{
    var ans = confirm("Do you want to quit the Game?")
    if (ans == true) {
        window.location.href = "index.html";
    } 
})