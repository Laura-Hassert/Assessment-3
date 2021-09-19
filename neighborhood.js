        
const choices = [
        "https://www.pomodorodowningtown.com/",
        "https://stationtaproom.com/", 
        "https://victorybeer.com/",
        "https://www.estrellatacobar.com/"];

const random = Math.floor(Math.random() * choices.length);

function randomRest() {
    // console.log(random, choices[random]);
    parent.open(choices[random]);
}
       
document.getElementById("restaurant").addEventListener('click', randomRest);