import React from 'react';
import Navbar from './Navbar';

function ProductDetail({ product, onBack }) {
  return (
    <div className="product-detail-bg">
      <Navbar />
      <div className="container py-5">
        <div className="row g-4 align-items-start">
          {/* Sol: Ürün resmi ve detaylar */}
          <div className="col-lg-7 position-relative">
            <button
              className="btn btn-primary position-absolute"
              style={{ top: 0, left: 0, zIndex: 2, borderRadius: 24, padding: '6px 18px', background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)', border: 'none' }}
              onClick={onBack}
            >
              ← Geri Dön
            </button>
            <div className="d-flex flex-column align-items-center mb-4 mt-4">
              <img src={product.img} alt={product.name} style={{ maxWidth: 280, maxHeight: 280, borderRadius: 16, background: '#fff', boxShadow: '0 4px 24px rgba(44,62,80,0.10)' }} className="mb-4" />
              <h2 className="fw-bold mb-2 text-primary" style={{ color: '#2c3e50' }}>{product.name}</h2>
              <div className="mb-2 text-secondary">6A-CLASS, POMPASIZ / POMPALI</div>
              <ul className="mb-0 ps-3 text-center" style={{ maxWidth: 400 }}>
                <li>12'' Inline HND 5 Mikron Spun Filtre</li>
                <li>12'' Inline HND GAC Coconat Karbon Filtre</li>
                <li>12'' Inline Blok Coconat Karbon Filtre</li>
                <li>10'' Inline PALLAS Post Karbon Filtre</li>
                <li>Mineral Filtre</li>
                <li>80 GPD PLATINUM Membran</li>
                <li>Mineral Filtre</li>
              </ul>
            </div>
          </div>
          {/* Sağ: Bilgi talep formu */}
          <div className="col-lg-5">
            <div className="card shadow-sm p-4 border-0" style={{ borderRadius: 18 }}>
              <div className="fw-bold fs-5 text-center mb-3" style={{ color: '#2c3e50' }}>BİLGİ TALEBİ</div>
              <form>
                <input className="form-control mb-3" placeholder="Ad Soyad" />
                <input className="form-control mb-3" placeholder="E-Mail" type="email" />
                <input className="form-control mb-3" placeholder="Telefon" type="tel" />
                <select className="form-control mb-3">
                  <option>Ülke</option>
                  <option>Türkiye</option>
                  <option>Diğer</option>
                </select>
                <select className="form-control mb-3">
                  <option>Şehir</option>
                  <option>İstanbul</option>
                  <option>Ankara</option>
                  <option>İzmir</option>
                  <option>Diğer</option>
                </select>
                <textarea className="form-control mb-3" placeholder="Mesaj" rows={3} />
                <button className="btn btn-primary w-100 fw-bold" type="submit" style={{ background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)', border: 'none' }}>BİLGİ AL! &nbsp; &rarr;</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail; 