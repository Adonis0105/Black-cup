<template>
  <section id="booking" class="booking">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Réservation</h2>
        <p class="section-subtitle">
          Réservez votre créneau en quelques clics
        </p>
      </div>

<div class="booking-container">
    <div class="booking-form-wrapper">
      <form @submit.prevent="submitBooking" class="booking-form">
        <!-- … vos champs name / phone / service … -->

        <div class="form-row">
              <div class="form-group">
                <label for="name">Nom complet</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="bookingData.name" 
                  required
                  placeholder="Votre nom complet"
                >
              </div>
              <div class="form-group">
                <label for="phone">Téléphone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="bookingData.phone" 
                  required
                  placeholder="+228 XX XX XX XX"
                >
              </div>
            </div>

            <div class="form-group">
              <label for="service">Service</label>
              <select id="service" v-model="bookingData.service" required>
                <option value="">Choisissez votre service</option>
                <optgroup label="Packs Individuels">
                  <option value="pack-simple">Pack Simple - 500 Fr</option>
                  <option value="pack-retouche">Pack Retouche - 300 Fr</option>
                  <option value="pack-mixte">Pack Mixte - 1,500 Fr</option>
                  <option value="Coiffure à domicile">Coiffure à domicile - 5000 Fr</option>
                  <option value="pack-vip">Pack VIP - 5,000 Fr</option>
                </optgroup>
                <optgroup label="Abonnements">
                  <option value="abo-simple">Abonnement Simple - 4,000 Fr/mois</option>
                  <option value="abo-mixte">Abonnement Mixte - 10,000 Fr/mois</option>
                  <option value="abo-vip">Abonnement VIP - 25,000 Fr/mois</option>
                </optgroup>
              </select>
            </div>


        <div class="form-row">
          <div class="form-group">
            <label for="date">Date</label>
            <input
              type="date"
              id="date"
              v-model="bookingData.date"
              :min="minDate"
              required
            >
          </div>
          <div class="form-group">
            <label for="time">Heure</label>
            <select id="time" v-model="bookingData.time" required>
              <option value="">Choisissez l'heure</option>
              <option
                v-for="time in filteredTimes"
                :key="time"
                :value="time"
              >{{ time }}</option>
            </select>
          </div>
        </div>

        <!-- notes + bouton -->
        <button
          type="submit"
          class="submit-btn"
          :disabled="!isFormValid || loading"
        >
          <span class="btn-text">
            {{ loading ? 'En cours…' : 'Confirmer la réservation' }}
          </span>
        </button>
      </form>
    </div>
  

        <div class="booking-info">
          <div class="info-card">
            <h3>Informations importantes</h3>
            <ul>
              <li>📅 Réservation possible 7j/7</li>
              <li>⏰ Horaires: 8h00 - 20h00</li>
              <li>💳 Paiement sur place ou mobile money</li>
              <li>📞 Confirmation par SMS</li>
              <li>🔄 Annulation gratuite 2h avant</li>
            </ul>
          </div>

          <div class="contact-card">
            <h3>Nous contacter</h3>
            <div class="contact-item">
              <span class="contact-icon">📱</span>
              <span>98 42 03 36 / 93 17 60 52</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <span>Lomé, Togo</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">✉️</span>
              <span>wallaboniface98@gmail.Com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import axios from 'axios'



// ✅ Adresse de ton backend — tu peux utiliser une variable d'environnement si tu préfères
const API_URL = 'http://localhost:3000'

const bookingData = ref({
  name: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  notes: ''
})

const availableTimes = [
  '08:00','08:30','09:00','09:30','10:00','10:30',
  '11:00','11:30','12:00','12:30','13:00','13:30',
  '14:00','14:30','15:00','15:30','16:00','16:30',
  '17:00','17:30','18:00','18:30','19:00','19:30'
]

const bookedTimes = ref<string[]>([])
const loading = ref(false)

const minDate = computed(() => new Date().toISOString().split('T')[0])

const isFormValid = computed(() => {
  const b = bookingData.value
  return b.name && b.phone && b.service && b.date && b.time
})

// ✅ Mise à jour des créneaux réservés lors d’un changement de date
watch(() => bookingData.value.date, async (newDate) => {
  if (!newDate) {
    bookedTimes.value = []
    return
  }

  try {
    const res = await axios.get(`${API_URL}/api/bookings`, { params: { date: newDate } })
    bookedTimes.value = res.data.bookedTimes || [] // ✅ fallback si champ manquant
  } catch (err) {
    console.error('Erreur chargement réservations :', err)
    bookedTimes.value = []
  }
})

// ✅ Liste des heures disponibles = toutes - celles réservées
const filteredTimes = computed(() => {
  const booked = bookedTimes.value || []
  return availableTimes.filter(t => !booked.includes(t))
})

// ✅ Envoi du formulaire
async function submitBooking() {
  if (!isFormValid.value) return

  loading.value = true
  try {
    await axios.post(`${API_URL}/api/bookings`, bookingData.value)
    alert(`✅ Réservation confirmée pour ${bookingData.value.name} le ${bookingData.value.date} à ${bookingData.value.time}`)

    // Réinitialisation du formulaire
    Object.assign(bookingData.value, {
      name: '', phone: '', service: '', date: '', time: '', notes: ''
    })
    bookedTimes.value = []

  } catch (err: any) {
    alert(err.response?.data?.error || '❌ Une erreur est survenue lors de la réservation.')
    console.error('Erreur enregistrement :', err)
  } finally {
    loading.value = false
  }
}
</script>


<style scoped>
.booking {
  padding: 6rem 0;
  background: linear-gradient(135deg, #000 0%, #1a1a1a 50%, #000 100%);
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
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
}

.booking-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: start;
}

.booking-form-wrapper {
  background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid #333;
}

.booking-form {
  width: 100%;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #D4AF37;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #333;
  border-radius: 10px;
  background: #000;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #D4AF37;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 80px;
}

.submit-btn {
  width: 100%;
  background: linear-gradient(45deg, #D4AF37, #F4E271);
  color: #000;
  border: none;
  padding: 1.2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.submit-btn:not(:disabled):hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
}

.btn-icon {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.submit-btn:hover .btn-icon {
  transform: translateX(5px);
}

.booking-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card,
.contact-card {
  background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid #333;
}

.info-card h3,
.contact-card h3 {
  color: #D4AF37;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.info-card ul {
  list-style: none;
}

.info-card li {
  color: #ccc;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #ccc;
}

.contact-icon {
  font-size: 1.2rem;
}

@media (max-width: 968px) {
  .booking-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .booking-form-wrapper {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .booking {
    padding: 4rem 0;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
}
</style>