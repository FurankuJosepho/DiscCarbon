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
function myAlert() {
    alert("Press Any of the Keys Like ( q , w , e , r , a , s , d , f , z , x , c )")
}

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      audio1.play();
      audio2.pause();
      audio3.pause();
      audio4.pause();
      audio5.pause();
      audio6.pause();
      audio7.pause();
      audio8.pause();
      audio9.pause();
      audio10.pause();
      audio11.pause();
      audio1.currentTime = 0;
      let Wow = document.getElementById("Wow");
      Wow.style.background = "Grey";
      setTimeout(() => {
        Wow.style.background = "#26292c";
      }, 1500);
      break;
    case "s":
      audio1.pause();
      audio2.play();
      audio3.pause();
      audio4.pause();
      audio5.pause();
      audio6.pause();
      audio7.pause();
      audio8.pause();
      audio9.pause();
      audio10.pause();
      audio11.pause();
      audio2.currentTime = 0;
      let Bob = document.getElementById("Bob");
      Bob.style.background = "Grey";
      setTimeout(() => {
        Bob.style.background = "#26292c";
      }, 1500);
      break;
    case "d":
      audio1.pause();
      audio2.pause();
      audio3.play();
      audio4.pause();
      audio5.pause();
      audio6.pause();
      audio7.pause();
      audio8.pause();
      audio9.pause();
      audio10.pause();
      audio11.pause();
      audio3.currentTime = 0;
      let Blue = document.getElementById("Blue");
      Blue.style.background = "Grey";
      setTimeout(() => {
        Blue.style.background = "#26292c";
      }, 1500);
      break;
    case "f":
      audio1.pause();
      audio2.pause();
      audio3.pause();
      audio4.play();
      audio5.pause();
      audio6.pause();
      audio7.pause();
      audio8.pause();
      audio9.pause();
      audio10.pause();
      audio11.pause();
      audio4.currentTime = 0;
      let Pew = document.getElementById("Pew");
      Pew.style.background = "Grey";
      setTimeout(() => {
        Pew.style.background = "#26292c";
      }, 1500);
      break;
    case "q":
      audio1.pause();
      audio2.pause();
      audio3.pause();
      audio4.pause();
      audio5.play();
      audio6.pause();
      audio7.pause();
      audio8.pause();
      audio9.pause();
      audio10.pause();
      audio11.pause();
      audio5.currentTime = 0;
      let Fart = document.getElementById("Fart");
      Fart.style.background = "Grey";
      setTimeout(() => {
        Fart.style.background = "#26292c";
      }, 1500);
      break;
    case "w":
      audio1.pause();
      audio2.pause();
      audio3.pause();
      audio4.pause();
      audio5.pause();
      audio6.play();
      audio7.pause();
      audio8.pause();
      audio9.pause();
      audio10.pause();
      audio11.pause();
      audio6.currentTime = 0;
      let Devu = document.getElementById("Devu");
      Devu.style.background = "Grey";
      setTimeout(() => {
        Devu.style.background = "#26292c";
      }, 1500);
      break;
    case "e":
      audio1.pause();
      audio2.pause();
      audio3.pause();
      audio4.pause();
      audio5.pause();
      audio6.pause();
      audio7.play();
      audio8.pause();
      audio9.pause();
      audio10.pause();
      audio11.pause();
      audio7.currentTime = 0;
      let Emotional = document.getElementById("Emotional");
      Emotional.style.background = "Grey";
      setTimeout(() => {
        Emotional.style.background = "#26292c";
      }, 1500);
      break;
    case "r":
      audio1.pause();
      audio2.pause();
      audio3.pause();
      audio4.pause();
      audio5.pause();
      audio6.pause();
      audio7.pause();
      audio8.play();
      audio9.pause();
      audio10.pause();
      audio11.pause();
      audio8.currentTime = 0;
      let Runner = document.getElementById("Run");
      Runner.style.background = "Grey";
      setTimeout(() => {
        Runner.style.background = "#26292c";
      }, 1500);
      break;
    case "z":
      audio1.pause();
      audio2.pause();
      audio3.pause();
      audio4.pause();
      audio5.pause();
      audio6.pause();
      audio7.pause();
      audio8.pause();
      audio9.play();
      audio10.pause();
      audio11.pause();
      audio9.currentTime = 0;
      let Sadest = document.getElementById("Sad");
      Sadest.style.background = "Grey";
      setTimeout(() => {
        Sadest.style.background = "#26292c";
      }, 1500);
      break;
    case "x":
      audio1.pause();
      audio2.pause();
      audio3.pause();
      audio4.pause();
      audio5.pause();
      audio6.pause();
      audio7.pause();
      audio8.pause();
      audio9.pause();
      audio10.play();
      audio11.pause();
      audio10.currentTime = 0;
      let tutut = document.getElementById("tutut");
      tutut.style.background = "Grey";
      setTimeout(() => {
        tutut.style.background = "#26292c";
      }, 1500);
      break;
    case "c":
      audio1.pause();
      audio2.pause();
      audio3.pause();
      audio4.pause();
      audio5.pause();
      audio6.pause();
      audio7.pause();
      audio8.pause();
      audio9.pause();
      audio10.pause();
      audio11.play();
      audio11.currentTime = 0;
      let Who = document.getElementById("Who");
      Who.style.background = "Grey";
      setTimeout(() => {
        Who.style.background = "#26292c";
      }, 1500);
      break;
    default:
      break;
  }
});
