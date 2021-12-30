//cut off anchor tags
window.location.replace("#");
if (typeof window.history.replaceState == "function") {
  history.replaceState({}, "", window.location.href.slice(0, -1));
}

function resizeHome() {
  let theCover = document.querySelector("#theCover");
  if (window.innerWidth > 1030) {
    let navHeight = document.querySelector("nav").offsetHeight;
    let presentedHeight = document.querySelector("#presentedBy").offsetHeight;
    let heightToRemove = navHeight + presentedHeight + "px";
    theCover.style.height = `calc(100vh - ${heightToRemove})`;
    theCover.style.padding = `${presentedHeight}px 0 ${navHeight}px 0`;
  } else {
    theCover.style.height = "";
    theCover.style.padding = "";
  }
}

function startEngine() {
  loadMusic.forEach((e) => {
    musicFade(e.location, e.mp3, e.loopPoint);
  });
  document.getElementById("root").classList.remove("unstarted");
  document.getElementById("startScreen").classList.add("started");
  document.getElementById("navigation").classList.add("started");
  document.getElementById("intro").classList.add("started");
}

function musicFade(sceneID, mp3Source, loopTime) {
  let cover = document.getElementById(sceneID);
  let coverSong = new Howl({
    src: [`mp3/${mp3Source}`],
    volume: 0,
    autoplay: true,
    html5: true,
    onend: function () {
      if (loopTime == null) {
        this.seek(0);
        this.play();
      } else {
        this.seek(loopTime);
        this.play();
      }
    },
  });

  function checkScroll() {
    resizeHome();
    let position = cover.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
      if (position.top > 0) {
        coverSong.volume((1 - position.top / window.innerHeight) / 2);
      } else if (position.bottom < window.innerHeight) {
        coverSong.volume(position.bottom / window.innerHeight / 2);
      } else {
        coverSong.volume(0.5);
      }
    } else {
      coverSong.volume(0);
    }
  }
  setTimeout(checkScroll, 100);
  window.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);
  document.addEventListener(
    "visibilitychange",
    function () {
      if (document.hidden) {
        coverSong.pause();
      } else {
        coverSong.play();
      }
    },
    false
  );
}