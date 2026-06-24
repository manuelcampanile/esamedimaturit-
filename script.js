const glow = document.querySelector('.cursor-glow');
const heroImage = document.querySelector('.hero-image-card');

document.addEventListener('mousemove', (e) => {
  if (glow) {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  }

  if (heroImage) {
    const x = (window.innerWidth / 2 - e.clientX) / 45;
    const y = (window.innerHeight / 2 - e.clientY) / 45;
    heroImage.style.transform = `translateY(-4px) rotateY(${-x}deg) rotateX(${y}deg)`;
  }
});

document.addEventListener('mouseleave', () => {
  if (heroImage) {
    heroImage.style.transform = `translateY(0px) rotateY(0deg) rotateX(0deg)`;
  }
});