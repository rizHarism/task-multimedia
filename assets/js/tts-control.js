
// Aktifkan TTS 
function aktifkanTTS() {
  localStorage.setItem("ttsAktif", "true");
}

// Nonaktifkan TTS
function nonaktifkanTTS() {
  localStorage.setItem("ttsAktif", "false");
}

// Cek TTS aktif
function isTTSAktif() {
  return localStorage.getItem("ttsAktif") === "true";
}

function toggleTTS(buttonId = "toggle-tts") {
  const aktif = isTTSAktif();
  if (aktif) {
    nonaktifkanTTS();
  } else {
    aktifkanTTS();
  }
  updateTTSButtonIcon(buttonId);
}

// Fungsi untuk memperbarui ikon tombol sesuai status
function updateTTSButtonIcon(buttonId = "toggle-tts") {
  const tombol = document.getElementById(buttonId);
  if (!tombol) return;

  if (isTTSAktif()) {
    tombol.innerText = "🔊 Matikan Narasi";
  } else {
    tombol.innerText = "🔇 Aktifkan Narasi";
  }
}
