import { useState } from 'react'

const base = import.meta.env.BASE_URL

const SPECIALISTS_DATA = {
  nurse: {
    role: 'Oliy toifali bosh hamshira',
    name: 'Malika Tohirova',
    rating: '★ 4.98 (124)',
    exp: 'Tajriba: 8 yil',
    photo: `${base}images/nurse_madina.jpg`,
    location: '📍 Chilonzor 7-mavze (850 metr)',
    eta: 'ETA: 12-15 daq',
  },
  doctor: {
    role: 'Shifokor-terapevt',
    name: 'Dr. Jasur Umarov',
    rating: '★ 4.96 (210)',
    exp: 'Tajriba: 16 yil',
    photo: `${base}images/doctor_jasur.jpg`,
    location: "📍 Mirzo Ulug'bek tumani (1.4 km)",
    eta: 'ETA: 18-20 daq',
  },
  pediatric: {
    role: 'Pediatriya hamshirasi',
    name: 'Zarina Aliyeva',
    rating: '★ 4.95 (189)',
    exp: 'Tajriba: 11 yil',
    photo: `${base}images/nurse_dilnoza.jpg`,
    location: '📍 Yunusobod tumani (1.1 km)',
    eta: 'ETA: 15 daq',
  },
}

const TAB_LABELS = {
  nurse: 'Hamshira (Uyda muolaja)',
  doctor: 'Shifokor-terapevt',
  pediatric: 'Pediatriya hamshirasi',
}

export default function Hero({ showToast }) {
  const [activeKey, setActiveKey] = useState('nurse')
  const [fading, setFading] = useState(false)

  const spec = SPECIALISTS_DATA[activeKey]

  const switchSpecialist = (key) => {
    if (key === activeKey) return
    setFading(true)
    setTimeout(() => {
      setActiveKey(key)
      setFading(false)
      showToast(`${SPECIALISTS_DATA[key].name} tanlandi`)
    }, 150)
  }

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-arrival-badge">
              <div className="hab-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <span>Tezkor tibbiy xizmat: 15–20 daqiqada uyingizda</span>
            </div>

            <h1 className="hero-title">
              Malakali <span className="gradient-text">hamshira va shifokor</span> uyingizda
            </h1>

            <p className="hero-description">
              Kasalxonalarda soatlab navbat kutmang va yo'l charchog'idan saqlaning. Barcha zarur tibbiy muolajalarni o'z uyingizda, to'liq sterillik va diplomli mutaxassislar nazoratida xavfsiz qabul qiling.
            </p>

            <div className="hero-buttons">
              <a href="#services" className="btn btn-primary btn-lg">
                <span>Xizmatlar bilan tanishish</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#specialists" className="btn btn-secondary btn-lg">
                <span>Mutaxassislarimiz</span>
              </a>
            </div>

            <div className="hero-trust-row">
              <div className="trust-item">
                <div className="trust-num">15<span>daq</span></div>
                <div className="trust-label">Tezkor yetib borish</div>
              </div>
              <div className="trust-item">
                <div className="trust-num">100<span>%</span></div>
                <div className="trust-label">Steril bir martalik vositalar</div>
              </div>
              <div className="trust-item">
                <div className="trust-num">4.95<span>★</span></div>
                <div className="trust-label">Ishonch reytingi (3,400+)</div>
              </div>
            </div>
          </div>

          <div className="hero-creative-wrapper">
            <div className="hub-floating-widget hfw-top-right">
              <div className="hfw-avatars-stack">
                <img src={`${import.meta.env.BASE_URL}images/nurse_madina.jpg`} alt="Mutaxassis" />
                <img src={`${import.meta.env.BASE_URL}images/doctor_jasur.jpg`} alt="Mutaxassis" />
                <img src={`${import.meta.env.BASE_URL}images/nurse_dilnoza.jpg`} alt="Mutaxassis" />
              </div>
              <div className="hfw-text">
                <strong>450+ Mutaxassis</strong>
                <small>🟢 Toshkent bo'ylab navbatchi</small>
              </div>
            </div>

            <div className="medical-hub-card">
              <div className="mhc-header">
                <div className="mhc-title-box">
                  <div className="mhc-icon-chip">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div>
                    <h4>Aqlli Tibbiy Ekosistema</h4>
                    <small>Toshkent shahar markaziy dispetcheri</small>
                  </div>
                </div>
                <div className="mhc-live-status">
                  <span className="pulse-beacon" />
                  <span>24/7 Jonli Tizim</span>
                </div>
              </div>

              <div className="hub-role-selector">
                {Object.keys(SPECIALISTS_DATA).map((key) => (
                  <button
                    key={key}
                    type="button"
                    className={`hrs-btn${activeKey === key ? ' active' : ''}`}
                    onClick={() => switchSpecialist(key)}
                  >
                    {TAB_LABELS[key]}
                  </button>
                ))}
              </div>

              <div className={`hub-specialist-display${fading ? ' fading' : ''}`}>
                <div className="hsd-photo-wrap">
                  <img src={spec.photo} alt={spec.name} className="hsd-photo" />
                  <span className="hsd-online-badge" />
                </div>
                <div className="hsd-info">
                  <span className="hsd-role">{spec.role}</span>
                  <h3 className="hsd-name">{spec.name}</h3>
                  <div className="hsd-meta-row">
                    <span className="hsd-rating">{spec.rating}</span>
                    <span className="hsd-exp">{spec.exp}</span>
                  </div>
                </div>
              </div>

              <div className="hub-radar-box">
                <div className="hrb-left">
                  <div className="radar-ping-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                      <polygon points="12 2 19 21 12 17 5 21 12 2" />
                    </svg>
                  </div>
                  <div className="hrb-details">
                    <strong>{spec.location}</strong>
                    <small>Eng yaqin navbatchi mutaxassis aniqlandi</small>
                  </div>
                </div>
                <div className="hrb-eta-pill">{spec.eta}</div>
              </div>

              <div className="hub-checklist">
                {['100% Steril asboblar', 'Bosim va puls nazorati', 'Diplomli mutaxassis'].map((item) => (
                  <div key={item} className="hcl-item">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="hub-action-row">
                <a href="tel:+998712000024" className="btn-hub-call">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Bog'lanish: +998 71 200 00 24</span>
                </a>
                <a href="#contact" className="btn-hub-tg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span>Maslahat olish</span>
                </a>
              </div>
            </div>

            <div className="hub-floating-widget hfw-bottom-left">
              <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="hfw-text">
                <strong>Litsenziyalangan Xizmat</strong>
                <small>Sog'liqni Saqlash Vazirligi standarti</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
