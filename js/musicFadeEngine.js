function musicFade(sceneID, mp3Source) {
  let cover = document.getElementById(sceneID);
  let coverSong = document.createElement("audio");
  coverSong.src = mp3Source;
  coverSong.type = "audio/mpeg";
  coverSong.volume = 0;
  coverSong.autoplay = true;
  coverSong.loop = true;
  cover.appendChild(coverSong);

  function checkScroll() {
    let position = cover.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
      if (position.top > 0) {
        coverSong.volume = 1 - position.top / window.innerHeight;
      } else if (position.bottom > 0) {
        coverSong.volume = position.bottom / window.innerHeight;
      }
    } else {
      coverSong.volume = 0;
    }
  }
  window.addEventListener("scroll", checkScroll);
}
