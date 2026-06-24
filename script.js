const glow = document.querySelector('.cursor-glow');
const heroCard = document.querySelector('.hero-visual-card');

document.addEventListener('mousemove', (e) => {
  if (glow) {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  }

  if (heroCard && window.innerWidth > 900) {
    const x = (window.innerWidth / 2 - e.clientX) / 45;
    const y = (window.innerHeight / 2 - e.clientY) / 45;
    heroCard.style.transform = `translateY(-4px) rotateY(${-x}deg) rotateX(${y}deg)`;
  }
});

document.addEventListener('mouseleave', () => {
  if (heroCard) {
    heroCard.style.transform = `translateY(0px) rotateY(0deg) rotateX(0deg)`;
  }
});