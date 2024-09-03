/* eslint-disable no-undef */
const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

// Указываем папку, где находятся статические файлы
app.use(express.static(path.join(__dirname, 'dist')));

// Для всех маршрутов отправляем index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});