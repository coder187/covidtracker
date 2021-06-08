//code from
//https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link

var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
    isPlaying ? myAudio.pause() : myAudio.play();
        }

myAudio.onplaying = function () {
    isPlaying = true;
    let e = document.getElementById("myicon");
    e.className = "";
    e.classList.add("fas");
    e.classList.add("fa-volume-down");
    
    };

myAudio.onpause = function () {
    isPlaying = false;
    let e = document.getElementById("myicon");
    e.className = "";
    e.classList.add("fas");
    e.classList.add("fa-volume-mute");
};