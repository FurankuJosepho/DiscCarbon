const allButtons = document.querySelectorAll(".buttons1");
const openCloseVid = document.getElementById("video");
const video = document.getElementById("Vids");
const mediaDevices = navigator.mediaDevices;
const theUnMute = document.getElementById("mute")

document.addEventListener("keydown", e =>{
    if (e.key.toLowerCase() === "u") {
        let audio = new Audio ("Sounds/Mute.mp3");
        audio.play();
        let notMuted = document.getElementById("mute");
        notMuted.classList.add("notMute");
        let unmuted = document.getElementById("unmutebtn");
        unmuted.classList.add("unmute");
        setTimeout(() => {
            notMuted.classList.remove("notMute");
            unmuted.classList.remove("unmute");
        }, 2000);
    }
});

theUnMute.addEventListener("click",function () {
    let audio = new Audio ("Sounds/Mute.mp3");
    audio.play();
    let notMuted = document.getElementById("mute");
    notMuted.classList.add("notMute");
    let unmuted = document.getElementById("unmutebtn");
    unmuted.classList.add("unmute");
    setTimeout(() => {
        notMuted.classList.remove("notMute");
        unmuted.classList.remove("unmute");
    }, 2000);
});

let isCameraOn = false;
let mediaStream = null;

openCloseVid.addEventListener("click", openClose);

async function openClose() {
    try {
      if (isCameraOn) {
            // Turn off the camera if it's already on
            if (mediaStream) {
                mediaStream.getTracks().forEach(track => track.stop());
                video.srcObject = null;
                mediaStream = null;
            }
            isCameraOn = false;
        } else {
            // Turn on the camera
            mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = mediaStream;
            isCameraOn = true;
        }
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
}

    document.addEventListener("keydown",function(e){

    });

