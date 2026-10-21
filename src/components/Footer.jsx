export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-alert-103">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="fa-icon">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 1 1.73-3Z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <p>
            <strong>Muhim tibbiy ogohlantirish:</strong> Bizning xizmat faqat rejali va shifokor ko'rsatmasi bo'lgan tibbiy muolajalarni amalga oshiradi. O'tkir, og'ir, hushdan ketish yoki shoshilinch tezkor holatlarda zudlik bilan <strong>103</strong> davlat tez tibbiy yordam xizmatiga qo'ng'iroq qiling!
          </p>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-brand">
              <div className="brand-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 6v12" />
                  <path d="M6 12h12" />
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                </svg>
              </div>
              <div className="brand-info">
                <span className="brand-name" style={{ color: '#FFFFFF' }}>Med<span style={{ color: 'var(--primary)' }}>Clinic</span></span>
                <span style={{ fontSize: '0.72rem', color: '#BAE6FD' }}>Malakali hamshira uyingizda</span>
              </div>
            </div>
            <p>
              O'zbekistonda uyingizga eng yaqin malakali va diplomli hamshiralarni tezkor jalb qilishning zamonaviy tibbiy dispetcherlik platformasi.
            </p>
          </div>

          <div className="footer-col">
            <h4>Xizmatlar</h4>
            <ul>
              <li><a href="#services">Vena ichiga ukol</a></li>
              <li><a href="#services">Tomchilovchi dori (Kapelnitsa)</a></li>
              <li><a href="#services">Yara bog'lash va perevyazka</a></li>
              <li><a href="#services">Bolalar muolajasi</a></li>
              <li><a href="#services">Uyda EKG tekshiruvi</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Sahifalar</h4>
            <ul>
              <li><a href="#home">Asosiy</a></li>
              <li><a href="#specialists">Mutaxassislarimiz</a></li>
              <li><a href="#features">Imkoniyatlar</a></li>
              <li><a href="#steps">Jarayon</a></li>
              <li><a href="#faq">Savol-javob</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Aloqa & Navbatchilik</h4>
            <ul>
              <li style={{ color: '#FFFFFF', fontWeight: 700 }}>📞 +998 71 200 00 24</li>
              <li style={{ color: '#FFFFFF', fontWeight: 700 }}>📱 +998 90 123 45 67</li>
              <li style={{ color: '#BAE6FD' }}>📍 Toshkent sh., Chilonzor tumani</li>
              <li style={{ color: '#38BDF8', fontWeight: 700 }}>🟢 24/7 Tunu-kun xizmat</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 MedClinic / Shifokor.com. Barcha huquqlar himoyalangan.</p>
          <p>Sog'liqni Saqlash Vazirligi standartlari asosida xizmat ko'rsatiladi.</p>
        </div>
      </div>
    </footer>
  )
}
