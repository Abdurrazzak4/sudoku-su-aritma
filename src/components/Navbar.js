import React from 'react';

function Navbar() {
  return (
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
}

export default Navbar; 