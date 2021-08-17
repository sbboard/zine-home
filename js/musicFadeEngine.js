let testCon = document.getElementById("testCon");

//cut off anchor tags
window.location.replace("#");
if (typeof window.history.replaceState == "function") {
  history.replaceState({}, "", window.location.href.slice(0, -1));
}

function startEngine() {
  loadMusic.forEach((e) => {
    musicFade(e.location, e.mp3);
  });
  document.getElementById("root").classList.remove("unstarted");
  document.getElementById("startScreen").innerHTML = "";
}

function musicFade(sceneID, mp3Source) {
  let cover = document.getElementById(sceneID);
  let coverSong = new Howl({
    src: [`mp3/${mp3Source}`],
    volume: 1,
    autoplay: true,
    loop: true,
    html5: true,
  });
  coverSong.play();

  function checkScroll() {
    let position = cover.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
      testCon.innerHTML += sceneID;
      if (position.top > 0) {
        coverSong.volume(1 - position.top / window.innerHeight);
      } else if (position.bottom > 0) {
        coverSong.volume(position.bottom / window.innerHeight);
      }
    } else {
      coverSong.volume(0);
    }
  }
  window.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);
  checkScroll();
}
