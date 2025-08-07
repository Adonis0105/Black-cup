<template>
  <section id="home" class="hero">
    <div class="hero-background">
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">
          <span class="title-line">BLACK CUT</span>
          <span class="title-line gold">BARBERSHOP</span>
        </h1>
        <p class="hero-subtitle">
          L'art de la coiffure masculine dans un cadre premium
        </p>
        <div class="hero-buttons">
          <button class="btn-primary" @click="scrollToBooking">
            Réserver maintenant
          </button>
          <button class="btn-secondary" @click="scrollToServices">
            Nos services
          </button>
        </div>
      </div>
      <div class="hero-stats">
        <div class="stat-item">
          <span class="stat-number">500+</span>
          <span class="stat-label">Clients satisfaits</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">5</span>
          <span class="stat-label">Années d'expérience</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">100%</span>
          <span class="stat-label">Qualité garantie</span>
        </div>
      </div>
    </div>
    <div class="scroll-indicator">
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToBooking = () => {
  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToServices = () => {
  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero {
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
}

.hero-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg') center/cover;
  opacity: 0.3;
  animation: parallax 20s infinite linear;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 1200px;
  padding: 0 2rem;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 8rem);
  font-weight: 900;
  line-height: 0.9;
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
}

.title-line {
  display: block;
  animation: slideInUp 1s ease-out;
}

.title-line.gold {
  color: #D4AF37;
  background: linear-gradient(45deg, #D4AF37, #F4E271);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: slideInUp 1s ease-out 0.3s both;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #ccc;
  margin-bottom: 3rem;
  font-weight: 300;
  animation: fadeInUp 1s ease-out 0.6s both;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 4rem;
  animation: fadeInUp 1s ease-out 0.9s both;
}

.btn-primary {
  background: linear-gradient(45deg, #D4AF37, #F4E271);
  color: #000;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
}

.btn-secondary {
  background: transparent;
  color: #fff;
  padding: 1rem 2rem;
  border: 2px solid #D4AF37;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #D4AF37;
  color: #000;
  transform: translateY(-3px);
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  animation: fadeInUp 1s ease-out 1.2s both;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  color: #D4AF37;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: #ccc;
  font-weight: 300;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-line {
  width: 2px;
  height: 60px;
  background: #D4AF37;
  animation: scrollPulse 2s infinite;
}

@keyframes slideInUp {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

@keyframes parallax {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@media (max-width: 768px) {
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .hero-stats {
    flex-direction: column;
    gap: 2rem;
  }

  .btn-primary, .btn-secondary {
    width: 250px;
  }
}
</style>