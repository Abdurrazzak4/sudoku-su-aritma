import React, { useState, useRef } from 'react';
import './App.css';
import ProductsPage from './components/ProductsPage';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import FaqAccordion from './components/FaqAccordion';
import Hizmetler from './components/Hizmetler';
import heroImage from './images/image.png';

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
