const music = document.getElementById("bg-music");
const video = document.getElementById("video");
const startBtn = document.getElementById("start-btn");
const gallery = document.getElementById("gallery");
const grupo1 = document.getElementById("grupo1");
const grupo2 = document.getElementById("grupo2");
const videoContainer = document.getElementById("video-container");

startBtn.addEventListener("click", async () => {
  try {
    await music.play();
  } catch (e) {
    console.warn("Error al reproducir música:", e);
  }

  gallery.style.display = "block";
  grupo1.style.display = "block";
  startBtn.style.display = "none";

  setTimeout(() => {
    grupo2.style.display = "block";
  }, 20000);

  setTimeout(() => {
    videoContainer.style.display = "block";
  }, 30000);
});

video.addEventListener("play", () => {
  music.volume = 0.1;
});
video.addEventListener("pause", () => {
  music.volume = 1.0;
});
video.addEventListener("ended", () => {
  music.volume = 1.0;
});
