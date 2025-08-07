<template>
  <section id="services" class="services">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Nos Services</h2>
        <p class="section-subtitle">
          Des prestations de qualité premium pour sublimer votre style
        </p>
      </div>

      <div class="services-grid">
        <!-- Packs individuels -->
        <div class="service-category">
          <h3 class="category-title">Packs Individuels</h3>
          <div class="services-row">
            <ServiceCard 
              v-for="service in individualServices" 
              :key="service.id"
              :service="service"
            />
          </div>
        </div>

        <!-- Abonnements -->
        <div class="service-category">
          <h3 class="category-title">Abonnements Premium</h3>
          <div class="services-row">
            <ServiceCard 
              v-for="subscription in subscriptions" 
              :key="subscription.id"
              :service="subscription"
              :isSubscription="true"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard from './ServiceCard.vue'

const individualServices = [
  {
    id: 1,
    name: 'Pack Simple',
    price: 500,
    description: 'Coiffure classique avec finition professionnelle',
    features: ['Coupe', 'Shampooing', 'Séchage', 'Styling'],
    popular: false
  },
  {
    id: 2,
    name: 'Pack Retouche',
    price: 300,
    description: 'Retouche rapide et précise',
    features: ['Retouche coupe', 'Finition', 'Styling'],
    popular: false
  },
  {
    id: 3,
    name: 'Pack Mixte',
    price: 1500,
    description: 'Coiffure complète avec soins capillaires',
    features: ['Coupe', 'Shampooing', 'Soins capillaires', 'Masque', 'Styling'],
    popular: true
  },
  {
    id: 4,
    name: 'Pack VIP',
    price: 5000,
    description: 'L\'expérience premium ultime',
    features: ['Coupe', 'Soins premium', 'Masque de luxe', 'Verre de vin offert', 'Service personnalisé'],
    popular: false
  },
  {
    id : 5,
    name: 'Pack Coiffure à domicile',
    price: 5000,
    description: 'L\'expérience unique et confortable',
    features: ['Coupe', 'Shampooing', 'Séchage', 'Styling','Finition'],
    popular: false
  },
]

const subscriptions = [
  {
    id: 5,
    name: 'Abonnement Simple',
    price: 4000,
    description: 'Maximum 9 coiffures par mois',
    features: ['9 coupes max/mois', 'Réservation prioritaire', 'Remise exclusive','Manicure & pédicure'],
    sessions: 9,
    popular: false
  },
  {
    id: 6,
    name: 'Abonnement Mixte',
    price: 10000,
    description: 'Maximum 7 packs mixtes par mois',
    features: ['7 packs mixtes max/mois', 'Soins inclus', 'Service premium', 'Réservation VIP'],
    sessions: 7,
    popular: true
  },
  {
    id: 7,
    name: 'Abonnement VIP',
    price: 25000,
    description: 'Maximum 5 packs VIP par mois',
    features: ['5 packs VIP max/mois', 'Service de luxe', 'Vins inclus', 'Concierge personnel'],
    sessions: 5,
    popular: false
  }
]
</script>

<style scoped>
.services {
  padding: 6rem 0;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  position: relative;
}

.services::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23D4AF37" opacity="0.05"/><circle cx="75" cy="75" r="1" fill="%23D4AF37" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #D4AF37;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #D4AF37, #F4E271);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #ccc;
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
}

.service-category {
  margin-bottom: 4rem;
}

.category-title {
  font-size: 2rem;
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
}

.services-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-items: center;
}

@media (max-width: 768px) {
  .services {
    padding: 4rem 0;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .services-row {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>