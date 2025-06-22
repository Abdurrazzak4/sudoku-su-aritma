const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // path modülünü ekle
const sanitizeHtml = require('sanitize-html');

require('dotenv').config({ path: path.resolve(__dirname, '.env') }); // .env dosyasını yükle, yolunu belirt

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: ['http://localhost:3000', 'https://sudokuaritma.com'] })); // Sadece güvenilir domainler
app.use(bodyParser.json()); // JSON formatındaki istek gövdelerini ayrıştır

app.post('/send-email', async (req, res) => {
  const { name, phone, message } = req.body;

  // Basit input doğrulama
  if (!name || !phone || !message) {
    return res.status(400).send('Tüm alanlar zorunludur.');
  }
  // Telefon numarası regex kontrolü (örnek, ihtiyaca göre güncellenebilir)
  const phoneRegex = /^[0-9\-\+\s()]{7,20}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).send('Geçersiz telefon numarası.');
  }
  // XSS ve HTML injection'a karşı sanitize et
  const safeName = sanitizeHtml(name);
  const safePhone = sanitizeHtml(phone);
  const safeMessage = sanitizeHtml(message);

  // E-posta gönderici bilgileri (ortam değişkenlerinden alınacak)
  const transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net', // Yeni SMTP Sunucusu
    port: 465, // Yeni Port
    secure: true, // SSL / TLS için true
    auth: {
      user: process.env.EMAIL_USER, // Gönderen e-posta adresi
      pass: process.env.EMAIL_PASS, // E-posta şifresi
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'info@sudokuaritma.com', // Alıcı e-posta adresi düzeltildi
    subject: 'Yeni İletişim Formu Mesajı',
    html: `
      <p><b>Adı:</b> ${safeName}</p>
      <p><b>Telefon:</b> ${safePhone}</p>
      <p><b>Mesaj:</b> ${safeMessage}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('E-posta başarıyla gönderildi.');
    res.status(200).send('E-posta başarıyla gönderildi.');
  } catch (error) {
    console.error('E-posta gönderme hatası:', error);
    res.status(500).send('E-posta gönderme hatası.');
  }
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
}); 