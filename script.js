window.addEventListener("scroll", function () {
  const header = document.getElementById("black_header");
  const scroll = window.scrollY;

  if (scroll > 0) {
    header.style.backgroundColor = "black";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

window.addEventListener("scroll", function () {
  const smallVideo = document.querySelector(".Video_Transform");
  const DEFAULT_WIDTH = 700;

  const scroll = window.scrollY;

  smallVideo.style.maxWidth = `1266px`;

  if (scroll > 0 && scroll < 300) {
    console.log("🚀 ~ scroll:", scroll);
    console.log("🚀 ~ DEFAULT_WIDTH + scroll:", DEFAULT_WIDTH + scroll);
    smallVideo.style.width = `${DEFAULT_WIDTH + scroll}px`;
  } else {
    if (scroll === 0) {
      console.log("🚀 ~ zero  scroll:");
      smallVideo.style.width = `${DEFAULT_WIDTH}px`;
    }
  }
});
