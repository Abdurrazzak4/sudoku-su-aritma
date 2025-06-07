import React, { useState, useRef } from 'react';
import './App.css';
import ProductsPage from './components/ProductsPage';
import Navbar from './components/Navbar';
import { products, dummyProducts } from './data/products';
import productImage from './images/image.png';
import ContactForm from './components/ContactForm';
import FaqAccordion from './components/FaqAccordion';
import Hizmetler from './components/Hizmetler';
import Hakkimizda from './components/Hakkimizda';

function ProductDetail({ product, onBack }) {
  // Navbar (ana sayfadakiyle aynı)
  const navbar = (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand fw-bold d-flex align-items-center" href="/">
          <img src="/logo-removebg.png" alt="Sudoku Su Arıtma Logo" />
          <span>Sudoku Su Arıtma</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Menüyü Aç/Kapat">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="/">Ana Sayfa</a></li>
            <li className="nav-item"><a className="nav-link active" href="/urunler">Ürünlerimiz</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="product-detail-bg">
      {navbar}
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

function App() {
  const [message, setMessage] = useState('');
  const iletisimRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(0);

  // Teklif Al butonu
  const handleTeklifAl = () => {
    if (iletisimRef.current) {
      iletisimRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMessage('Teklif almak istiyorum.');
    }
  };

  // Smooth scroll for nav links
  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Ürünlerimiz linki tıklandığında yeni sekmede aç
  const handleProductsClick = (e) => {
    e.preventDefault();
    const win = window.open('/urunler', '_self');
    if (win) win.focus();
  };

  // Sayfa yönlendirme için basit bir kontrol
  const isProductsPage = window.location.pathname === '/urunler';
  if (isProductsPage) {
    return <ProductsPage />;
  }

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <div className="hero text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Suyun Dokusuna Dokunuyoruz</h1>
          <p className="lead mb-4">Sudoku Su Arıtma ile evinizde, işyerinizde saf, sağlıklı ve lezzetli suya ulaşın.</p>
          <button type="button" id="teklifAlBtn" className="btn btn-light btn-lg rounded-pill shadow-sm" onClick={handleTeklifAl}>Teklif Al</button>
        </div>
      </div>
      {/* Main Content */}
      <div className="container-fluid">
        <div className="main-content">
          {/* Hizmetler */}
          <section id="hizmetler" className="section bg-white">
            <h2 className="fw-bold text-center mb-5">Hizmetlerimiz</h2>
            <Hizmetler />
          </section>

          {/* Hakkımızda */}
          <section id="hakkimizda" className="section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                  <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80" alt="Su Arıtma" className="img-fluid rounded-3 shadow" />
                </div>
                <div className="col-md-6">
                  <h2 className="fw-bold mb-3">Hakkımızda</h2>
                  <p>Sudoku Su Arıtma olarak, 10 yılı aşkın tecrübemizle Türkiye'nin dört bir yanında ev ve işyerlerine kaliteli su arıtma çözümleri sunuyoruz. Müşteri memnuniyetini ve sağlığı ön planda tutan anlayışımızla, güvenilir servis ve bakım hizmetleri veriyoruz.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Sıkça Sorulan Sorular */}
          <section id="sss" className="section">
            <div className="container">
              <h2 className="fw-bold text-center mb-5">Sıkça Sorulan Sorular</h2>
              <FaqAccordion openFaq={openFaq} setOpenFaq={setOpenFaq} />
            </div>
          </section>

          {/* İletişim */}
          <section id="iletisim" className="section bg-white" ref={iletisimRef}>
            <div className="container">
              <h2 className="fw-bold text-center mb-5">İletişim</h2>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <ContactForm iletisimRef={iletisimRef} message={message} setMessage={setMessage} />
                  <div className="mt-4 text-center">
                    <p><b>Telefon:</b> 0 539 567 26 87</p>
                    <p><b>E-posta:</b> info@sudokusuaritma.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Footer */}
      <div className="footer">
        <div className="container">
          <span>© 2024 Sudoku Su Arıtma | Tüm hakları saklıdır.</span>
        </div>
      </div>
    </div>
  );
}

export default App;
