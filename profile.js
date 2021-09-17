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

function colorBtns(event) {
    event.target.style.backgroundColor = "black"
    event.target.style.color = "white"
}

function offBtns(event) {
    event.target.style.backgroundColor = "yellow"
    event.target.style.color = "black"
}

document.getElementById("color").addEventListener('click', faveColor);
document.getElementById("place").addEventListener('click', favePlace);
document.getElementById("ritual").addEventListener('click', faveRitual)

document.getElementById("color").addEventListener('mouseover', colorBtns);
document.getElementById("place").addEventListener('mouseover', colorBtns);
document.getElementById("ritual").addEventListener('mouseover', colorBtns);

document.getElementById("color").addEventListener('mouseout', offBtns);
document.getElementById("place").addEventListener('mouseout', offBtns);
document.getElementById("ritual").addEventListener('mouseout', offBtns);