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

  // Iniciar música y mostrar contenido
  startBtn.addEventListener("click", async () => {
    try {
      await music.play();
      console.log("🎵 Música reproduciéndose...");
    } catch (e) {
      console.warn("No se pudo reproducir la música automáticamente:", e);
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

  // Función para manejar volumen
  function manejarVolumen(video, nombre) {
    video.addEventListener("play", () => {
      console.log(`▶️ ${nombre} se está reproduciendo`);
      music.volume = 0.1;
    });

    video.addEventListener("pause", () => {
      console.log(`⏸️ ${nombre} pausado`);
      music.volume = 1.0;
    });

    video.addEventListener("ended", () => {
      console.log(`🔚 ${nombre} terminó`);
      music.volume = 1.0;
    });
  }

  manejarVolumen(video1, "Video 1");
  manejarVolumen(video2, "Video 2");
});
