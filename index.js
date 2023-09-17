const allButtons = document.querySelectorAll(".buttons1");
const openCloseVid = document.getElementById("video");
const video = document.getElementById("Vids");
const mediaDevices = navigator.mediaDevices;
const theUnMute = document.getElementById("mute");
const soundboards = document.querySelectorAll(".soundboards");
const audio1 = new Audio("Sounds/Wow.mp3");
const audio2 = new Audio("Sounds/Bob.mp3");
const audio3 = new Audio("Sounds/Blue.mp3");
const audio4 = new Audio("Sounds/Pew.mp3");
const audio5 = new Audio("Sounds/Fart.mp3");
const audio6 = new Audio("Sounds/Devu.mp3");
const audio7 = new Audio("Sounds/Emotional.mp3");
const audio8 = new Audio("Sounds/Run.mp3");
const audio9 = new Audio("Sounds/Sad.mp3");
const audio10 = new Audio("Sounds/tutut.mp3");
const audio11 = new Audio("Sounds/Who.mp3");

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "u") {
    let audio = new Audio("Sounds/Mute.mp3");
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

theUnMute.addEventListener("click", function () {
  let audio = new Audio("Sounds/Mute.mp3");
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
        mediaStream.getTracks().forEach((track) => track.stop());
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


document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      audio1.play();
      audio2.pause();
      audio1.currentTime = 0;
      let Wow = document.getElementById("Wow");
      Wow.style.background = "Grey";
      setTimeout(() => {
        Wow.style.background = "#26292c";
      }, 1500);
      break;
    case "s":
      audio2.play();
      audio1.pause();
      audio2.currentTime = 0;
      let Bob = document.getElementById("Bob");
      Bob.style.background = "Grey";
      setTimeout(() => {
        Bob.style.background = "#26292c";
      }, 1500);
      break;
    case "d":
      audio3.play();
      audio2.pause();
      audio1.pause();
      audio2.currentTime = 0;
      let Blue = document.getElementById("Blue");
      Blue.style.background = "Grey";
      setTimeout(() => {
        Blue.style.background = "#26292c";
      }, 1500);
      break;
    case "w":
      audio4.play();
      audio3.pause();
      audio2.pause();
      audio1.pause();
      audio4.currentTime = 0;
      let Pew = document.getElementById("Pew");
      Pew.style.background = "Grey";
      setTimeout(() => {
        Pew.style.background = "#26292c";
      }, 1500);
      break;
    case "w":
        audio6.play();
      audio5.pause();
      audio4.pause();
      audio3.pause();
      audio2.pause();
      audio1.pause();
      audio6.currentTime = 0;
      let Fart = document.getElementById("Fart");
      Fart.style.background = "Grey";
      setTimeout(() => {
        Fart.style.background = "#26292c";
      }, 1500);
      break;
    case "q":
        audio7.play()
      audio6.pause();
      audio5.pause();
      audio4.pause();
      audio3.pause();
      audio2.pause();
      audio1.pause();
      audio7.currentTime = 0;
      let Devu = document.getElementById("Devu");
      Devu.style.background = "Grey";
      setTimeout(() => {
        Devu.style.background = "#26292c";
      }, 1500);
      break;
      default:
        break;
  }
});
