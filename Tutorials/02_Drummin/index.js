// Mapping keys to sound files
const soundMap = {
    w: "sounds/tom-1.mp3",
    a: "sounds/tom-2.mp3",
    s: "sounds/tom-3.mp3",
    d: "sounds/tom-4.mp3",
    j: "sounds/snare.mp3",
    k: "sounds/crash.mp3",
    l: "sounds/kick-bass.mp3",
  };
  
  // Function to play sound
  function playSound(key) {
    if (soundMap[key]) {
      const audio = new Audio(soundMap[key]);
      audio.play();
    }
  }
  
  // Function to animate button
  function animateButton(key) {
    const button = document.querySelector(`button[data-key="${key}"]`);
    if (button) {
      button.classList.add("pressed");
      setTimeout(() => button.classList.remove("pressed"), 100);
    }
  }
  
  // Adding event listeners to buttons
  document.querySelectorAll(".drum").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.getAttribute("data-key");
      playSound(key);
      animateButton(key);
    });
  });
  
  // Adding keypress event listener
  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    playSound(key);
    animateButton(key);
  });
  