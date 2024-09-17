/* eslint-disable no-undef */
const express = require('express')
const path = require('path')
const app = express()

const cors = require('cors');

const nodemailer = require('nodemailer')

const port = 8066

app.use(cors({
  origin: 'http://localhost:5173', // Разрешаем запросы только с вашего фронтенда
  methods: ['GET', 'POST'],
  allowedHeaders: 'Content-Type'
}));

// Указываем папку, где находятся статические файлы
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.json()); // Это обязательно для работы с JSON

// Для всех маршрутов отправляем index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const transporter = nodemailer.createTransport({
  service: 'gmail', // Use any email service
  auth: {
    user: 'grishingerman7766005@gmail.com',
    pass: 'frnm jyry qxsg lbub'
  }
})

app.post('/send-email', (req, res) => {
  const { from, to, subject, text } = req.body

  const mailOptions = {
    from: from, // Email, введённый пользователем
    to: to, // Получатель
    subject: subject,
    text: text,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString())
    }
    res.send('Email sent: ' + info.response)
  })
})



app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
