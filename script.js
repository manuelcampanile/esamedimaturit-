const cursorLight = document.querySelector(".cursor-light");

document.addEventListener("mousemove", (e) => {
  if (cursorLight) {
    cursorLight.style.left = e.clientX + "px";
    cursorLight.style.top = e.clientY + "px";
  }
});

const cards = document.querySelectorAll(".section-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px, rgba(214,166,83,0.28), rgba(255,255,255,0.10) 38%)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "rgba(255,255,255,0.10)";
  });
});