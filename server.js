// server.js (ES Module)
import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import nodemailer from 'nodemailer'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

// 🔒 Configuration __dirname pour ES Modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
app.use(cors())
app.use(bodyParser.json())

// 🧠 Simule une base de données (en mémoire)
const reservations = []

// --- Configuration SMTP (Mailtrap) ---
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  },
  tls: { rejectUnauthorized: false }
})

// ✅ Vérification SMTP au démarrage
transporter.verify((err, success) => {
  if (err) {
    console.error('❌ Erreur SMTP :', err)
  } else {
    console.log('✅ SMTP prêt à envoyer des emails')
  }
})

// --- GET /api/bookings?date=YYYY-MM-DD
app.get('/api/bookings', (req, res) => {
  const { date } = req.query
  if (!date) return res.status(400).json({ error: 'Le paramètre "date" est requis' })

  const bookedTimes = reservations
    .filter(r => r.date === date)
    .map(r => r.time)

  res.json({ bookedTimes })
})

// --- POST /api/bookings
app.post('/api/bookings', (req, res) => {
  const { name, phone, service, date, time, notes } = req.body

  // 🔎 Vérification des champs obligatoires
  if (!name || !phone || !date || !time) {
    return res.status(400).json({ error: 'Champs obligatoires manquants' })
  }

  // 🔁 Vérifie si le créneau est déjà pris
  const exists = reservations.some(r => r.date === date && r.time === time)
  if (exists) {
    return res.status(409).json({ error: 'Créneau déjà réservé' })
  }

  // 💾 Enregistre la réservation
  const reservation = {
    name,
    phone,
    service,
    date,
    time,
    notes: notes || '',
    createdAt: new Date().toISOString()
  }
  reservations.push(reservation)

  // 📤 Envoi d'e-mail via Mailtrap
  const mailOptions = {
    from: '"BLACK CUT" <no-reply@blackcut.sn>',
    to: 'coiffeur@blackcut.sn',
    subject: `Nouvelle réservation - ${name}`,
    text: `Détails de la réservation :
Nom: ${name}
Téléphone: ${phone}
Service: ${service}
Date: ${date}
Heure: ${time}
Notes: ${notes || 'Aucune'}`,
    html: `<p><strong>Nouvelle réservation</strong></p>
<ul>
  <li>Nom: ${name}</li>
  <li>Téléphone: ${phone}</li>
  <li>Service: ${service}</li>
  <li>Date: ${date} à ${time}</li>
  <li>Notes: ${notes || 'Aucune'}</li>
</ul>`
  }

  transporter.sendMail(mailOptions)
    .then(info => console.log('📨 Email envoyé :', info.messageId))
    .catch(err => console.error('❌ Erreur email :', err))

  res.json({ success: true, message: 'Réservation confirmée' })
})

// --- Lancement du serveur ---
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`)
})
