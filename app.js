alert("Welcome to SpaceY  🚀  Are you ready for launch?");

const audio = document.getElementById("audio");

const playbtn = document.getElementById("playbtn");

playbtn.addEventListener("click", Play);

function Play() {
    if(audio.paused) {
        audio.play();
        }
        else {
            audio.pause();
        }
        }