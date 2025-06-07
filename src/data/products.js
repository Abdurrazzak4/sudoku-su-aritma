import productImage from '../images/image.png';

export const products = {
  ecoplus: {
    name: 'Ecoplus Serisi Su Arıtma Cihazı',
    img: productImage,
    desc: '5 aşamalı filtrasyon sistemiyle şebeke suyunu arıtarak temiz içme suyu sağlar. İsteğe bağlı olarak 8 aşamaya kadar yükseltilebilir. Sağlam gövde yapısı ve kolay filtre değişimi ile öne çıkar.'
  },
  stilmax: {
    name: 'Stilmax Su Arıtma Cihazı',
    img: productImage,
    desc: 'Modern, kompakt tasarım. 7 aşamalı filtrasyon. Kolay kurulum ve bakım, yüksek performans. Yumuşak içim ve berraklık garantisiyle evinizin vazgeçilmezi.'
  },
  hydrosafe: {
    name: 'HydroSafe Kabinetli Yumuşatma',
    img: productImage,
    desc: 'Otomatik ters yıkama işlemiyle kendini temizler. 5 farklı model seçeneğiyle farklı ihtiyaçlara uygun, uzun ömürlü, verimli su yumuşatma sistemi.'
  },
  sebili: {
    name: 'Paslanmaz Çelik Arıtmalı Su Sebili',
    img: productImage,
    desc: 'Hijyenik, dayanıklı gövde yapısı. Sıcak, soğuk ve oda sıcaklığında arıtılmış suyu anında sunar. Okul, ofis ve iş yerleri için idealdir.'
  },
  filter: {
    name: 'Greenaqua Filtreler',
    img: productImage,
    desc: 'Açık kasa, kapalı kasa, inline ve membran dahil geniş filtre yelpazesiyle cihazlarınız için yedek filtre seçenekleri.'
  }
};

export const dummyProducts = Array.from({ length: 20 }, (_, i) => ({
  name: `Arıtma Filtresi ${i + 1}`,
  img: productImage,
  price: `${(Math.floor(Math.random() * 2000) + 500).toLocaleString('tr-TR')} TL`,
})); 