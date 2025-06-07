import React, { useState } from 'react';

function ContactForm({ iletisimRef, message, setMessage }) {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className="mb-3">
        <label htmlFor="ad" className="form-label">Adınız</label>
        <input type="text" className="form-control" id="ad" required />
      </div>
      <div className="mb-3">
        <label htmlFor="telefon" className="form-label">Telefon</label>
        <input type="tel" className="form-control" id="telefon" required />
      </div>
      <div className="mb-3">
        <label htmlFor="mesaj" className="form-label">Mesajınız</label>
        <textarea className="form-control" id="mesaj" rows="4" required value={message} onChange={e => setMessage(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary w-100">Gönder</button>
    </form>
  );
}

export default ContactForm; 