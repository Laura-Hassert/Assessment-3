console.log("I'm working!");

function faveColor() {
    alert("My favorite color is gray!")
}

function favePlace() {
    alert("My favorite place is the beach!")
}

function faveRitual() {
    alert("My favorite ritual is my morning skincare routine!")
}

document.getElementById("color").addEventListener('click', faveColor)
document.getElementById("place").addEventListener('click', favePlace)
document.getElementById("ritual").addEventListener('click', faveRitual)