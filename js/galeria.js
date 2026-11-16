// abrir imagem grande
const zoom = document.getElementById("zoom");
const zoomImg = document.createElement("img");
zoom.append(zoomImg);

document.querySelectorAll(".photo").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const img = link.querySelector("img");
    zoomImg.src = link.href;
    zoomImg.alt = img.alt;
    zoom.showModal();
  });
});

// fechar clicando fora da imagem
zoom.addEventListener("click", (e) => {
  if (e.target === zoom) zoom.close();
});

document.getElementById("fechar").addEventListener("click", () => zoom.close());
