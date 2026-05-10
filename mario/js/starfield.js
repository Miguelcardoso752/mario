/**
 * Starfield Animation
 * Cria um fundo animado com estrelas cintilantes
 */

class Starfield {
  constructor(canvasId = 'starfield') {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.stars = [];
    this.particleCount = 100;

    this.resizeCanvas();
    this.initStars();
    this.animate();

    window.addEventListener('resize', () => this.resizeCanvas());
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  initStars() {
    this.stars = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.5 + 0.5,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinkleAmount: Math.random() * 0.5 + 0.2,
      });
    }
  }

  animate = () => {
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.stars.forEach((star) => {
      // Twinkling effect
      star.opacity += (Math.random() - 0.5) * star.twinkleSpeed;
      star.opacity = Math.max(0.1, Math.min(1, star.opacity));

      // Draw star
      this.ctx.fillStyle = `rgba(255, 210, 63, ${star.opacity})`;
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      this.ctx.fill();

      // Draw glow
      this.ctx.fillStyle = `rgba(92, 224, 216, ${star.opacity * 0.3})`;
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
      this.ctx.fill();
    });

    requestAnimationFrame(this.animate);
  };
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new Starfield();
  });
} else {
  new Starfield();
}
