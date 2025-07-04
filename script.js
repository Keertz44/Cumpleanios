document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const video1 = document.getElementById("video1");
  const video2 = document.getElementById("video2");
  const startBtn = document.getElementById("start-btn");
  const gallery = document.getElementById("gallery");
  const fotosTodas = document.getElementById("fotos-todas");
  const videoContainer = document.getElementById("video-container");
  const mostrarBtn = document.getElementById("mostrar-mensaje");
  const mensaje = document.getElementById("mensaje-final");

  // Reproducir música al entrar
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

  // Mostrar mensaje final
  mostrarBtn.addEventListener("click", () => {
    mensaje.style.display = "block";
    mostrarBtn.style.display = "none";
  });

  // Función para bajar y subir el volumen
  const manejarVolumen = (video) => {
    video.addEventListener("play", () => {
      music.volume = 0.1;
    });

    video.addEventListener("pause", () => {
      music.volume = 1.0;
    });

    video.addEventListener("ended", () => {
      music.volume = 1.0;
    });
  };

  manejarVolumen(video1);
  manejarVolumen(video2);
});
