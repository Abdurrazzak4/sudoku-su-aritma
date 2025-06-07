// Ürün detaylarını tutan nesne
const products = {
  "ecoplus": {
    name: "Ecoplus Serisi Su Arıtma Cihazı",
    img: "https://www.hsc.com.tr/upload/products/large/1444547152-1.jpg",
    desc: "5 aşamalı filtrasyon sistemiyle şebeke suyunu arıtarak temiz içme suyu sağlar. İsteğe bağlı olarak 8 aşamaya kadar yükseltilebilir. Sağlam gövde yapısı ve kolay filtre değişimi ile öne çıkar."
  },
  "stilmax": {
    name: "Stilmax Su Arıtma Cihazı",
    img: "https://www.hsc.com.tr/upload/products/large/1458563105-1.jpg",
    desc: "Modern, kompakt tasarım. 7 aşamalı filtrasyon. Kolay kurulum ve bakım, yüksek performans. Yumuşak içim ve berraklık garantisiyle evinizin vazgeçilmezi."
  },
  "hydrosafe": {
    name: "HydroSafe Kabinetli Yumuşatma",
    img: "https://www.hsc.com.tr/upload/products/large/1469171815-1.jpg",
    desc: "Otomatik ters yıkama işlemiyle kendini temizler. 5 farklı model seçeneğiyle farklı ihtiyaçlara uygun, uzun ömürlü, verimli su yumuşatma sistemi."
  },
  "sebili": {
    name: "Paslanmaz Çelik Arıtmalı Su Sebili",
    img: "https://www.hsc.com.tr/upload/products/large/1462467732-1.jpg",
    desc: "Hijyenik, dayanıklı gövde yapısı. Sıcak, soğuk ve oda sıcaklığında arıtılmış suyu anında sunar. Okul, ofis ve iş yerleri için idealdir."
  },
  "filter": {
    name: "Greenaqua Filtreler",
    img: "https://www.hsc.com.tr/upload/products/large/1488873825-1.jpg",
    desc: "Açık kasa, kapalı kasa, inline ve membran dahil geniş filtre yelpazesiyle cihazlarınız için yedek filtre seçenekleri."
  }
};

document.addEventListener('DOMContentLoaded', function() {
  // AOS kütüphanesini başlat (animasyonlar için)
  if (window.AOS) {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }

  // Tüm section'lara AOS animasyon özelliği ekle
  document.querySelectorAll('.section').forEach(section => {
    section.setAttribute('data-aos', 'fade-up');
  });

  // Kartlara hover efekti ekle
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Yan menü (sidebar) aç/kapa butonu ve fonksiyonu
  const sidebarToggle = document.getElementById('sidebarToggle');
  const body = document.body;
  
  // Sayfa yüklendiğinde sidebar'ın durumunu localStorage'dan al
  const isSidebarHidden = localStorage.getItem('sidebarHidden') === 'true';
  if (isSidebarHidden) {
    body.classList.add('sidebar-hidden');
  }
  
  // Toggle butonuna tıklanınca sidebar'ı aç/kapat
  sidebarToggle.addEventListener('click', () => {
    body.classList.toggle('sidebar-hidden');
    // Durumu localStorage'a kaydet
    localStorage.setItem('sidebarHidden', body.classList.contains('sidebar-hidden'));
  });

  // Mobilde, sayfanın herhangi bir yerine tıklanınca sidebar'ı kapat
  document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    const sidebarButton = document.getElementById('sidebarToggle');
    
    if (window.innerWidth <= 991) {
      if (!sidebar.contains(e.target) && !sidebarButton.contains(e.target)) {
        body.classList.add('sidebar-hidden');
        localStorage.setItem('sidebarHidden', 'true');
      }
    }
  });

  // Ürün menüsündeki linklere tıklanınca ürün detayını göster ve sidebar'ı kapat (mobilde)
  document.querySelectorAll('#productMenu .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      // Tüm linklerden active sınıfını kaldır
      document.querySelectorAll('#productMenu .nav-link').forEach(l => l.classList.remove('active'));
      // Tıklanan linke active sınıfı ekle
      this.classList.add('active');
      
      // Seçilen ürünün anahtarını al
      const key = this.getAttribute('data-key');
      const product = products[key];
      
      // Ürün detayını güncelle
      const productDetail = document.getElementById('productDetail');
      productDetail.style.opacity = '0';
      productDetail.style.transition = 'opacity 0.3s ease';
      
      setTimeout(() => {
        productDetail.innerHTML = `
          <img src="${product.img}" alt="${product.name}" class="animate__animated animate__fadeIn">
          <h3 class="animate__animated animate__fadeInUp">${product.name}</h3>
          <p class="animate__animated animate__fadeInUp">${product.desc}</p>
        `;
        requestAnimationFrame(() => {
          productDetail.style.opacity = '1';
        });
      }, 300);

      // Mobilde seçimden sonra sidebar'ı otomatik kapat
      if (window.innerWidth <= 991) {
        body.classList.add('sidebar-hidden');
        localStorage.setItem('sidebarHidden', 'true');
      }
    });
  });

  // Navigasyon linkleri için yumuşak kaydırma (smooth scroll)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      
      // Sadece # ise işlem yapma
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Navbar'a scroll animasyonu ekle
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const navbar = document.querySelector('.navbar');
    
    if (scrollPosition > 50) {
      navbar.style.background = 'rgba(44, 62, 80, 0.95)';
      navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    } else {
      navbar.style.background = 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)';
      navbar.style.boxShadow = 'none';
    }
  });

  // 'Teklif Al' butonuna tıklanınca iletişim formuna kaydır ve mesaj alanını doldur
  const teklifAlBtn = document.getElementById('teklifAlBtn');
  if (teklifAlBtn) {
    teklifAlBtn.addEventListener('click', function() {
      // İletişim formuna yumuşak kaydır
      const iletisimBolumu = document.getElementById('iletisim');
      if (iletisimBolumu) {
        iletisimBolumu.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Seçili ürünü bul
      let seciliUrun = document.querySelector('#productMenu .nav-link.active');
      let urunAdi = 'Bir ürün';
      if (seciliUrun) {
        const key = seciliUrun.getAttribute('data-key');
        if (window.products && window.products[key]) {
          urunAdi = window.products[key].name;
        }
      }
      // Mesaj kutusunu doldur
      const mesajInput = document.getElementById('mesaj');
      if (mesajInput) {
        mesajInput.value = urunAdi + ' için teklif almak istiyorum.';
        mesajInput.focus();
      }
    });
  }
}); 