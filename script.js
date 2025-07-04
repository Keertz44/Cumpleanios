const music = document.getElementById("bg-music");
const video = document.getElementById("video");
const startBtn = document.getElementById("start-btn");
const gallery = document.getElementById("gallery");
const fotosTodas = document.getElementById("fotos-todas");
const videoContainer = document.getElementById("video-container");
const mostrarBtn = document.getElementById("mostrar-mensaje");
const mensaje = document.getElementById("mensaje-final");

startBtn.addEventListener("click", async () => {
  try {
    await music.play();
  } catch (e) {
    console.warn("Error al reproducir música:", e);
  }

  gallery.style.display = "block";
  fotosTodas.classList.add("show");
  videoContainer.classList.add("show");
  startBtn.style.display = "none";

  mostrarBtn.style.display = "inline-block";
});

mostrarBtn.addEventListener("click", () => {
  mensaje.style.display = "block";
  mostrarBtn.style.display = "none";
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
