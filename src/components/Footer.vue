<template>
  <footer id="contact" class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <h3>BLACK CUT</h3>
            <span>BARBERSHOP</span>
          </div>
          <p class="footer-description">
            L'art de la coiffure masculine dans un cadre premium. 
            Votre style, notre passion.
          </p>
          <div style="display: none;" class="social-links">
            <a href="#" class="social-link">📘</a>
            <a href="#" class="social-link">📷</a>
            <a href="#" class="social-link">🐦</a>
            <a href="#" class="social-link">📱</a>
          </div>
        </div>

        <div class="footer-section">
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="#services">Pack Simple</a></li>
            <li><a href="#services">Pack Mixte</a></li>
            <li><a href="#services">Pack VIP</a></li>
            <li><a href="#services">Abonnements</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Horaires</h4>
          <div class="schedule">
            <div class="schedule-item">
              <span>Lun - Ven</span>
              <span>8h00 - 20h00</span>
            </div>
            <div class="schedule-item">
              <span>Samedi</span>
              <span>8h00 - 22h00</span>
            </div>
            <div class="schedule-item">
              <span>Dimanche</span>
              <span>10h00 - 18h00</span>
            </div>
          </div>
        </div>

        <div class="footer-section">
          <h4>Contact</h4>
          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <span>Lomé, Togo</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📱</span>
              <span>98420336 / 93176052</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">✉️</span>
              <span>wallaboniface98@gmail.Com</span>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-divider"></div>
        <div class="footer-bottom-content">
          <p>&copy; 2025 Black Cut Barbershop. Tous droits réservés.</p>
          <div class="footer-bottom-links">
            <a href="#">Mentions légales</a>
            <a href="#">Confidentialité</a>
            <a href="#">CGV</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
  padding: 4rem 0 2rem;
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #D4AF37, transparent);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section h3 {
  color: #D4AF37;
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

.footer-section span {
  color: #fff;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 1px;
}

.footer-description {
  color: #ccc;
  line-height: 1.6;
  margin: 1.5rem 0;
  font-size: 0.95rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, #1a1a1a, #333);
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: 1px solid #333;
}

.social-link:hover {
  background: linear-gradient(45deg, #D4AF37, #F4E271);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
}

.footer-section h4 {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: #ccc;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #D4AF37;
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
}

.schedule-item span:first-child {
  color: #ccc;
}

.schedule-item span:last-child {
  color: #D4AF37;
  font-weight: 600;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
  color: #ccc;
  font-size: 0.95rem;
}

.contact-icon {
  font-size: 1.1rem;
}

.footer-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, #333, transparent);
  margin-bottom: 2rem;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 0.9rem;
}

.footer-bottom-links {
  display: flex;
  gap: 2rem;
}

.footer-bottom-links a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
  color: #D4AF37;
}

@media (max-width: 968px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .footer-bottom-links {
    justify-content: center;
  }
  
  .schedule-item {
    justify-content: center;
    gap: 2rem;
  }
}
</style>