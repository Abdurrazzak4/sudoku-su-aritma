import React, { useState, useEffect } from 'react';
import ProductDetail from './ProductDetail';
import { products, dummyProducts } from '../data/products';
import Navbar from './Navbar';

function ProductsPage() {
  // Carousel için aktif index
  const [activeIndex, setActiveIndex] = useState(0);
  const productList = Object.values(products);
  const [detailProduct, setDetailProduct] = useState(null);

  // 5 saniyede bir otomatik geçiş
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % productList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [productList.length]);

  if (detailProduct) {
    return <ProductDetail product={detailProduct} onBack={() => setDetailProduct(null)} />;
  }

  return (
    <div className="products-page-bg">
      <Navbar />
      {/* Carousel */}
      <div className="products-carousel-wrapper mb-5">
        <div className="products-carousel position-relative rounded-4 overflow-hidden shadow-lg" style={{ height: 420, maxWidth: 900, margin: '32px auto 0 auto' }}>
          {productList.map((product, idx) => (
            <div
              className={`products-carousel-slide${activeIndex === idx ? ' active' : ''}`}
              key={idx}
              style={{
                display: activeIndex === idx ? 'block' : 'none',
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                transition: 'opacity 0.7s',
                zIndex: 1,
              }}
            >
              <div
                className="products-carousel-bg"
                style={{
                  backgroundImage: `url(${product.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                  filter: 'brightness(0.6)',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 2,
                }}
              />
              <div
                className="products-carousel-content d-flex flex-column justify-content-center align-items-center text-center"
                style={{
                  position: 'relative',
                  zIndex: 3,
                  height: '100%',
                  color: '#fff',
                  textShadow: '0 4px 24px rgba(0,0,0,0.7)',
                  padding: '0 32px',
                }}
              >
                <h2 className="display-4 fw-bold mb-3" style={{ fontSize: '2.7rem' }}>{product.name}</h2>
                <p className="lead mb-0" style={{ fontSize: '1.3rem', maxWidth: 700 }}>{product.desc}</p>
              </div>
            </div>
          ))}
          {/* Carousel dots */}
          <div className="d-flex justify-content-center position-absolute w-100" style={{ bottom: 18, zIndex: 4 }}>
            {productList.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`mx-1 btn btn-sm ${activeIndex === idx ? 'btn-light' : 'btn-outline-light'}`}
                style={{ borderRadius: '50%', width: 14, height: 14, padding: 0, opacity: 0.85 }}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* 4x5 Grid Kartlar */}
      <div className="container py-5">
        <h2 className="fw-bold text-center mb-4">Ürünlerimiz</h2>
        <div className="row g-4">
          {dummyProducts.map((product, idx) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3" key={idx}>
              <div className="card h-100 text-center p-3">
                <img src={product.img} alt={product.name} className="mb-3 mx-auto" style={{ maxWidth: '100%', maxHeight: 120, borderRadius: '12px', objectFit: 'cover' }} />
                <h6 className="fw-bold mb-2">{product.name}</h6>
                <div className="text-primary fw-bold mb-1">{product.price}</div>
                <button className="btn btn-outline-primary btn-sm mt-auto" onClick={() => setDetailProduct(product)}>
                  Detay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage; 