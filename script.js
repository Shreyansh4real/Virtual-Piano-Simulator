const WHITE_KEYS = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const BLACK_KEYS = ["2", "3", "5", "6", "7", "9", "0"];

const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

// Activate on Click
keys.forEach(function (key) {
  key.addEventListener("click", function () {
    playNote(key);
  });
});

// Activate on Keypress
document.addEventListener("keydown", function (e) {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key.toLowerCase());
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add("active");

  setTimeout(function () {
    key.classList.remove("active");
  }, 100);
}
