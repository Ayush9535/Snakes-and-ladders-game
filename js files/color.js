document.getElementById("color-back").addEventListener("click" ,  ()=>{
    window.location.href = "nickname.html"
})

var player1color = "none";
var player2color = "none";

var purple1 = document.getElementById("purple1")
var purple2 = document.getElementById("purple2")
var green1 = document.getElementById("green1")
var green2 = document.getElementById("green2")
var blue1 = document.getElementById("blue1")
var blue2 = document.getElementById("blue2")
var yellow1 = document.getElementById("yellow1")
var yellow2 = document.getElementById("yellow2")

purple1.addEventListener("click" , ()=>{
    player1color = "#FF00E5"

    green1.disabled = true
    green1.classList.add("blur")
    blue1.disabled = true
    blue1.classList.add("blur")
    yellow1.disabled = true
    yellow1.classList.add("blur")
})
green1.addEventListener("click" , ()=>{
    player1color = "#18FF04"

    purple1.disabled = true
    purple1.classList.add("blur")
    blue1.disabled = true
    blue1.classList.add("blur")
    yellow1.disabled = true
    yellow1.classList.add("blur")
})
blue1.addEventListener("click" , ()=>{
    player1color = "#06F0FF"

    green1.disabled = true
    green1.classList.add("blur")
    purple1.disabled = true
    purple1.classList.add("blur")
    yellow1.disabled = true
    yellow1.classList.add("blur")
})
yellow1.addEventListener("click" , ()=>{
    player1color = "#EBFF00"

    green1.disabled = true
    green1.classList.add("blur")
    blue1.disabled = true
    blue1.classList.add("blur")
    purple1.disabled = true
    purple1.classList.add("blur")
})
purple2.addEventListener("click" , ()=>{
    player2color = "#FF00E5"

    green2.disabled = true
    green2.classList.add("blur")
    blue2.disabled = true
    blue2.classList.add("blur")
    yellow2.disabled = true
    yellow2.classList.add("blur")
})
green2.addEventListener("click" , ()=>{
    player2color = "#18FF04"

    purple2.disabled = true
    purple2.classList.add("blur")
    blue2.disabled = true
    blue2.classList.add("blur")
    yellow2.disabled = true
    yellow2.classList.add("blur")
})
blue2.addEventListener("click" , ()=>{
    player2color = "#06F0FF"

    green2.disabled = true
    green2.classList.add("blur")
    purple2.disabled = true
    purple2.classList.add("blur")
    yellow2.disabled = true
    yellow2.classList.add("blur")
})
yellow2.addEventListener("click" , ()=>{
    player2color = "#EBFF00"

    green2.disabled = true
    green2.classList.add("blur")
    blue2.disabled = true
    blue2.classList.add("blur")
    purple2.disabled = true
    purple2.classList.add("blur")
})


document.getElementById("color-next").addEventListener("click" ,  ()=>{
    if (player1color == "none" || player2color == "none"){
        alert("Choose Icon Colour for player..!!")
    }else{

        localStorage.setItem("player1color" , player1color)
        localStorage.setItem("player2color" , player2color)

        window.location.href = "game.html"
    }
})