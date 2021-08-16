let globeSection = document.getElementById("one");
let move = null;

function onLeft(e) {
  let parentWidth = document.getElementById("one").offsetWidth;
  let onLeftSide = e.clientX < parentWidth / 2 ? true : false;
  return onLeftSide;
}

function leftMove() {
  document.getElementById("avatar").classList.add("leftMovin");
  establishWalk();
  let currentLeft = parseInt(document.getElementById("city").style.left);
  if (currentLeft < 0) {
    let newLeft = currentLeft + 100;
    document.getElementById("city").style.left = newLeft + "px";
  }
}
function rightMove() {
  document.getElementById("avatar").classList.remove("leftMovin");
  establishWalk();
  let currentLeft = parseInt(document.getElementById("city").style.left);
  let newLeft = currentLeft - 100;
  document.getElementById("city").style.left = newLeft + "px";
}

function establishWalk() {
  document.getElementById("avatar").classList.add("walk");
  setTimeout(() => {
    document.getElementById("avatar").classList.remove("walk");
  }, 450);
}

globeSection.addEventListener("mousedown", (e) => {
  if (onLeft(e)) {
    if (move == null) {
      leftMove();
      move = setInterval(leftMove, 500);
    }
  } else {
    if (move == null) {
      rightMove();
      move = setInterval(rightMove, 500);
    }
  }
});

globeSection.addEventListener("mouseup", (e) => {
  document.getElementById("avatar").classList.remove("leftMovin");
  clearInterval(move);
  move = null;
});
