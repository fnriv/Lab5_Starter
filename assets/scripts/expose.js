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

// Play the loaded audio when play button clicked
playButton.addEventListener('click', () => {
  audio.play();
});

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
let mute = document.querySelector('#volume-controls img');
let volume = document.getElementById('volume');

volume.addEventListener('change', () => {
  if(volume.value == 0) {
    mute.src = "assets/icons/volume-level-0.svg";
  }
});