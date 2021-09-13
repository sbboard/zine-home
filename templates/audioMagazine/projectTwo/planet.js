let instruments = document.getElementsByClassName("instrument");
let instrumentArray = Array.from(instruments);
const projPath = "projectTwo/";
const imgType = ".gif";

instrumentArray.forEach((v, i) => {
  //create audio element
  let soundFile = v.dataset.sound;
  let sound = document.createElement("audio");
  sound.loop = true;

  v.addEventListener("click", () => {
    //get current stage
    let imgSrc = v.children[0].src;
    let currentIndex = imgSrc[imgSrc.length - 5];

    //get img info
    let instrument = imgSrc
      .substring(imgSrc.indexOf(projPath))
      .replace(projPath, "")
      .replace(imgType, "")
      .replace(currentIndex, "");

    switch (parseInt(currentIndex)) {
      case 0:
        v.children[0].src = `${projPath}${instrument}1${imgType}`;
        sound.src = `${projPath}${soundFile}1.mp3`;
        sound.play();
        break;
      case 1:
        v.children[0].src = `${projPath}${instrument}2${imgType}`;
        sound.pause();
        sound.src = `${projPath}${soundFile}2.mp3`;
        sound.play();
        break;
      case 2:
        v.children[0].src = `${projPath}${instrument}0${imgType}`;
        sound.pause();
        sound.currentTime = 0;
        break;
    }
  });
});
