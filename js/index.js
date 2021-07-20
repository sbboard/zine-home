window.addEventListener("resize", resizeCard);

let card = document.getElementById("cardHolder");

function resizeCard() {
  let topHalf = document.getElementById("topHalf").clientHeight;
  let bottomHalf = document.getElementById("bottomHalf").clientHeight;
  let topOff = document.getElementById("topHalf").offsetHeight;
  let botOff = document.getElementById("topHalf").offsetHeight;
  console.log("top", topHalf, "bottom", bottomHalf);
  card.style.maxHeight = `calc(100% - ${
    topHalf + bottomHalf + topOff + botOff
  }px)`;
}

resizeCard();
