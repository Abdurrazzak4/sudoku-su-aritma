import React from 'react';

function FaqAccordion({ openFaq, setOpenFaq }) {
  return (
    <div className="accordion" id="faqAccordion">
      {[
        {
          question: 'Su arıtma cihazı neden gereklidir?',
          answer: 'Su arıtma cihazları, içme suyunuzdaki zararlı maddeleri, kloru, ağır metalleri ve mikroorganizmaları filtreler. Sağlığınız için temiz ve güvenli su sağlar.'
        },
        {
          question: 'Servis ve bakım süreciniz nasıl ilerliyor?',
          answer: 'Satış sonrası düzenli bakım ve teknik servis desteği sunuyoruz. Talebinize göre yerinde servis imkanı sağlıyoruz.'
        },
        {
          question: 'Fiyatlarınız nedir?',
          answer: 'Cihazlarımız ve hizmetlerimiz için fiyat teklifi almak için bize ulaşabilirsiniz.'
        }
      ].map((faq, idx) => (
        <div className="accordion-item" key={idx}>
          <h2 className="accordion-header">
            <button
              className={
                'accordion-button' + (openFaq === idx ? '' : ' collapsed')
              }
              type="button"
              onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
            >
              {faq.question}
            </button>
          </h2>
          <div
            className={
              'accordion-collapse collapse' + (openFaq === idx ? ' show' : '')
            }
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaqAccordion; 