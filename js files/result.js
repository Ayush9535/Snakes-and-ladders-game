document.getElementById("playagain").addEventListener("click" ,  ()=>{
    window.location.href = "nickname.html"
})
document.getElementById("quit").addEventListener("click" ,  ()=>{
    window.location.href = "index.html"
})

document.getElementById("winner-name").innerHTML = localStorage.getItem("winner")
document.getElementById("rollCount").innerHTML = localStorage.getItem("rollCount")