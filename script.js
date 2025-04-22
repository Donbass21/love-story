const you = document.getElementById("you");
const wife = document.getElementById("wife");
const song = document.getElementById("song");

function playSong() {
  song.play();
}

you.addEventListener("mouseover", () => {
  you.style.opacity = 0;
  setTimeout(() => {
    you.src = "images/you-smile.jpg";
    you.style.opacity = 1;
  }, 300);
});

you.addEventListener("mouseout", () => {
  you.style.opacity = 0;
  setTimeout(() => {
    you.src = "images/you-neutral.jpg";
    you.style.opacity = 1;
  }, 300);
});

wife.addEventListener("mouseover", () => {
  wife.style.opacity = 0;
  setTimeout(() => {
    wife.src = "images/wife-smile.jpg";
    wife.style.opacity = 1;
  }, 300);
});

wife.addEventListener("mouseout", () => {
  wife.style.opacity = 0;
  setTimeout(() => {
    wife.src = "images/wife-neutral.jpg";
    wife.style.opacity = 1;
  }, 300);
});
