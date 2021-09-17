
function randomRest() {
    let choices = [
            "www.pomodorodowningtown.com/",
            "stationtaproom.com/", 
            "victorybeer.com/"];
    
    function openSite() {
        window.location = choices[Math.floor(Math.choices() * choices.length)];
    };
    console.log("I'm working")
    return window.location

};
       
document.getElementById("restaurant").addEventListener('click', randomRest);
        