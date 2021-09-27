let globeSection = document.getElementById("one");
let move = null;
let ended = false;
let videoElement = document.getElementById("city");
let walkspeed = 500;
const maxLeft = 178;
let iterationCount = 1;

function rightMove() {
  const clicksToDeath = (videoElement.duration * 1000) / walkspeed;
  const movePerClick = 178 / clicksToDeath;
  let newLeft = movePerClick * iterationCount * -1;
  if (newLeft > maxLeft * -1) {
    iterationCount++;
    document.getElementById("city").style.left = newLeft + "vmin";
    videoElement.play();
    setTimeout(() => {
      videoElement.pause();
    }, walkspeed);
  } else {
    if (!videoElement.ended) {
      videoElement.play();
    } else {
      document.getElementById("city").style.left = maxLeft * -1 + "vmin";
    }
  }
}

globeSection.addEventListener("mousedown", (e) => {
  const adjustedWalkSpeed = walkspeed + 10;
  if (move == null) {
    rightMove();
    if (!ended) {
      document.getElementById("avatar").src = "projectOne/walk.gif";
    }
    move = setInterval(rightMove, adjustedWalkSpeed);
  }
});

globeSection.addEventListener("mouseup", (e) => {
  document.getElementById("avatar").src = "projectOne/idle.gif";
  clearInterval(move);
  move = null;
});

videoElement.onended = () => {
  console.log("play it");
  document.getElementById("bg-contain").style.cursor = "initial";
  ended = true;
  document.getElementById("avatar").src = "projectOne/idle.gif";
  document.getElementById("world").classList.remove("off");
};
