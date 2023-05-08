// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}

// Part 1 of Expose
let image = document.querySelector('#expose img');
let select = document.querySelector('select');
let audio = document.querySelector('audio');
let playButton = document.querySelector('button'); // in the FAQ they tell us to use querySelectorAll for some reason?


select.addEventListener('change', () =>{
  if(select.value == "air-horn")
  {
    image.src = "assets/images/air-horn.svg";
    audio.src = "assets/audio/air-horn.mp3";
  } else if(select.value == "car-horn")
  {
    image.src = "assets/images/car-horn.svg";
    audio.src = "assets/audio/car-horn.mp3";
  } else if(select.value == "party-horn")
  {
    image.src = "assets/images/party-horn.svg";
    audio.src = "assets/audio/party-horn.mp3";
  } else if(select.value == "select")
  {
    image.src = "assets/images/no-image.png";
    audio.src = "";
  }
});


// Part 2 of Expose
let volumeImage = document.querySelector('#volume-controls img');
let volume = document.getElementById('volume');

volume.addEventListener('change', () => {
  if(volume.value == 0) {
    volumeImage.src = "assets/icons/volume-level-0.svg";
  } else if(volume.value >= 1 && volume.value < 33) {
    volumeImage.src = "assets/icons/volume-level-1.svg";
  } else if(volume.value >= 33 && volume.value < 67) {
    volumeImage.src = "assets/icons/volume-level-2.svg";
  } else {
    volumeImage.src = "assets/icons/volume-level-3.svg";
  }
});

//Part 3 of Expose
  // Play the loaded audio when play button clicked
let playVolume = volume.value / 100;
const jsConfetti = new JSConfetti();


playButton.addEventListener('click', () => {

  audio.volume = playVolume;
  if (select.value == "party-horn") {
    jsConfetti.addConfetti();
    audio.play();
  }
  else {
    audio.play();
  }
});