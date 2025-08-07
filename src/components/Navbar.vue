<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-logo">
        <h2>BLACK CUT</h2>
        <span>BARBERSHOP</span>
      </div>
      
      <ul class="nav-menu" :class="{ active: isMenuOpen }">
        <li><a href="#home" @click="closeMenu">Accueil</a></li>
        <li><a href="#services" @click="closeMenu">Services</a></li>
        <li><a href="#booking" @click="closeMenu">Réservation</a></li>
        <li><a href="#contact" @click="closeMenu">Contact</a></li>
      </ul>
  
      <div class="nav-toggle" @click="toggleMenu">
        <span class="bar" :class="{ active: isMenuOpen }"></span>
        <span class="bar" :class="{ active: isMenuOpen }"></span>
        <span class="bar" :class="{ active: isMenuOpen }"></span>
      </div>

    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo h2 {
  color: #D4AF37;
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: 2px;
}

.nav-logo span {
  font-size: 0.8rem;
  color: #fff;
  font-weight: 300;
  letter-spacing: 1px;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-menu a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #D4AF37;
  transition: width 0.3s ease;
}

.nav-menu a:hover::after {
  width: 100%;
}

.nav-menu a:hover {
  color: #D4AF37;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem;
}

.bar {
  width: 25px;
  height: 3px;
  background: #D4AF37;
  margin: 3px 0;
  transition: 0.3s;
}

.bar.active:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.bar.active:nth-child(2) {
  opacity: 0;
}

.bar.active:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.98);
    width: 100%;
    text-align: center;
    transition: 0.3s;
    padding: 2rem 0;
  }

  .nav-menu.active {
    left: 0;
  }
}
</style>