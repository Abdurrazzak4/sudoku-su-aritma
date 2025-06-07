import React from 'react';

function Hizmetler() {
  return (
    <div className="row g-4">
      <div className="col-md-4">
        <div className="card p-4 h-100 text-center">
          <img src="https://img.icons8.com/ios/100/1e90ff/water-filter.png" alt="Cihaz Satışı" className="mb-3 mx-auto" style={{ width: '60px' }} />
          <h5 className="fw-bold">Su Arıtma Cihazı Satışı</h5>
          <p>Her ihtiyaca uygun, yüksek performanslı ve ekonomik su arıtma cihazları.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card p-4 h-100 text-center">
          <img src="https://img.icons8.com/ios/100/1e90ff/maintenance.png" alt="Teknik Servis" className="mb-3 mx-auto" style={{ width: '60px' }} />
          <h5 className="fw-bold">Teknik Servis & Bakım</h5>
          <p>Kurulum, bakım ve yedek parça hizmetlerinde hızlı ve güvenilir teknik destek.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card p-4 h-100 text-center">
          <img src="https://img.icons8.com/ios/100/1e90ff/water.png" alt="Danışmanlık" className="mb-3 mx-auto" style={{ width: '60px' }} />
          <h5 className="fw-bold">Danışmanlık</h5>
          <p>Suyunuzu analiz ediyor, size en uygun çözümü öneriyoruz. Sorularınız için her zaman yanınızdayız.</p>
        </div>
      </div>
    </div>
  );
}

export default Hizmetler; 