let globeSection = document.getElementById("one");
let move = null;

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
    establishWalk();
  } else {
    if (!videoElement.ended) {
      videoElement.play();
    } else {
      document.getElementById("city").style.left = maxLeft * -1 + "vmin";
    }
  }
}

function establishWalk() {}

globeSection.addEventListener("mousedown", (e) => {
  const adjustedWalkSpeed = walkspeed + 10;
  if (move == null) {
    rightMove();
    move = setInterval(rightMove, adjustedWalkSpeed);
  }
});

globeSection.addEventListener("mouseup", (e) => {
  clearInterval(move);
  move = null;
});

videoElement.onended = () => {
  console.log("play it");
  document.getElementById("bg-contain").style.cursor = "initial";
};
