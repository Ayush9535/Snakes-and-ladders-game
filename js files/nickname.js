document.getElementById("nickname-back").addEventListener("click" ,  ()=>{
    window.location.href = "index.html"
})

// var player1 = document.getElementById("player1").value
// var player2 = document.getElementById("player2").value



document.getElementById("nickname-next").addEventListener("click" ,  ()=>{
    var player1 = document.getElementById("player1").value
    var player2 = document.getElementById("player2").value


    if (player1 == "" || player2 == ""){
        alert("Enter Nickname for player..!!")
    }else{
        window.location.href = "color.html"
    }
})