import React, { useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function ContactForm({ iletisimRef, message, setMessage }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState(''); // To display success or error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Gönderiliyor...');

    try {
      const response = await fetch(`${API_URL}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, message }),
      });

      const data = await response.text(); // Get response as text

      if (response.ok) {
        setStatus('E-posta başarıyla gönderildi!');
        setName('');
        setPhone('');
        setMessage('');
      } else {
        setStatus(`E-posta gönderme hatası: ${data}`);
      }
    } catch (error) {
      console.error('Form gönderme hatası:', error);
      setStatus('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="ad" className="form-label">Adınız</label>
        <input type="text" className="form-control" id="ad" required value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="telefon" className="form-label">Telefon</label>
        <input type="tel" className="form-control" id="telefon" required value={phone} onChange={e => setPhone(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="mesaj" className="form-label">Mesajınız</label>
        <textarea className="form-control" id="mesaj" rows="4" required value={message} onChange={e => setMessage(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary w-100">Gönder</button>
      {status && <p className="mt-3 text-center">{status}</p>}
    </form>
  );
}

export default ContactForm; 