<template>
  <div class="service-card" :class="{ popular: service.popular }">
    <div v-if="service.popular" class="popular-badge">
      Populaire
    </div>
    <div class="card-header">
      <h3 class="service-name">{{ service.name }}</h3>
      <div class="service-price">
        <span class="price">{{ service.price.toLocaleString() }}</span>
        <span class="currency">Fr</span>
        <span v-if="isSubscription" class="period">/mois</span>
      </div>
    </div>
    <p class="service-description">{{ service.description }}</p>
    <ul class="service-features">
      <li v-for="feature in service.features" :key="feature">
        <span class="checkmark">✓</span>
        {{ feature }}
      </li>
    </ul>
    <div v-if="isSubscription && service.sessions" class="sessions-info">
      <span class="sessions-count">{{ service.sessions }}</span>
      <span class="sessions-label">sessions max</span>
    </div>
    <button class="select-btn" @click="selectService">
      Choisir ce pack
    </button>
  </div>
</template>

<script setup lang="ts">
interface Service {
  id: number
  name: string
  price: number
  description: string
  features: string[]
  popular?: boolean
  sessions?: number
}

defineProps<{
  service: Service
  isSubscription?: boolean
}>()

const selectService = () => {
  const bookingSection = document.getElementById('booking')
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.service-card {
  background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  border: 1px solid #333;
  transition: all 0.4s ease;
  cursor: pointer;
  overflow: hidden;
  max-width: 350px;
  width: 100%;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(212, 175, 55, 0.05), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: #D4AF37;
  box-shadow: 0 20px 40px rgba(212, 175, 55, 0.2);
}

.service-card:hover::before {
  opacity: 1;
}

.service-card.popular {
  border-color: #D4AF37;
  background: linear-gradient(145deg, #2a2a1a, #1a1a0f);
}

.popular-badge {
  position: absolute;
  top: -1px;
  right: 2rem;
  background: linear-gradient(45deg, #D4AF37, #F4E271);
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 0 0 10px 10px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.card-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.service-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.service-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.2rem;
}

.price {
  font-size: 2.5rem;
  font-weight: 800;
  color: #D4AF37;
}

.currency {
  font-size: 1.2rem;
  color: #D4AF37;
  font-weight: 600;
}

.period {
  font-size: 1rem;
  color: #ccc;
  font-weight: 400;
}

.service-description {
  color: #ccc;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
}

.service-features {
  list-style: none;
  margin-bottom: 2rem;
}

.service-features li {
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  color: #fff;
  font-size: 0.95rem;
}

.checkmark {
  color: #D4AF37;
  font-weight: bold;
  margin-right: 0.8rem;
  font-size: 1.1rem;
}

.sessions-info {
  text-align: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(212, 175, 55, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(212, 175, 55, 0.3);
}

.sessions-count {
  font-size: 2rem;
  font-weight: 800;
  color: #D4AF37;
  display: block;
}

.sessions-label {
  font-size: 0.9rem;
  color: #ccc;
}

.select-btn {
  width: 100%;
  background: linear-gradient(45deg, #D4AF37, #F4E271);
  color: #000;
  border: none;
  padding: 1rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.select-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s;
}

.select-btn:hover::before {
  left: 100%;
}

.select-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(212, 175, 55, 0.4);
}

@media (max-width: 768px) {
  .service-card {
    max-width: 100%;
  }
}
</style>