import useScrollReveal from '../hooks/useScrollReveal'

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const SPECIALISTS = [
  {
    photo: '/images/nurse_madina.jpg',
    name: 'Malika Tohirova',
    role: 'Oliy toifali bosh hamshira',
    exp: '8 yil',
    rating: '★ 4.98 (124)',
    skills: ['Kapelnitsa', 'Vena ukoli', 'Kateter'],
  },
  {
    photo: '/images/nurse_dilnoza.jpg',
    name: 'Zarina Aliyeva',
    role: 'Reanimatsiya hamshirasi',
    exp: '11 yil',
    rating: '★ 4.95 (189)',
    skills: ['Qiyin tomirlar', 'Kapelnitsa', "Zond qo'yish"],
  },
  {
    photo: '/images/nurse_timur.jpg',
    name: 'Timur Ahmedov',
    role: 'Jarrohlik hamshirasi',
    exp: '9 yil',
    rating: '★ 4.95 (140)',
    skills: ['Yara perevyazkasi', 'Chok parvarishi', 'Ukol'],
  },
  {
    photo: '/images/doctor_jasur.jpg',
    name: 'Dr. Jasur Umarov',
    role: 'Shifokor-terapevt',
    exp: '16 yil',
    rating: '★ 4.96 (210)',
    skills: ['Terapiya', 'Kardiologiya', "Uy ko'rigi"],
  },
]

export default function Specialists() {
  const revealRef = useScrollReveal()
  return (
    <section className="specialists-section" id="specialists">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Bizning Jamoa</span>
          <h2 className="section-title">Malakali Shifokor va Hamshiralarimiz</h2>
          <p className="section-subtitle">
            Har bir mutaxassisimiz tibbiy diplom, amaldagi toifa sertifikati va yillik statsionar tajribaga ega
          </p>
        </div>

        <div className="specialists-grid" ref={revealRef}>
          {SPECIALISTS.map((s, i) => (
            <div key={s.name} className={`specialist-card reveal reveal-delay-${i + 1}`}>
              <div className="specialist-img-box">
                <img src={s.photo} alt={s.name} className="specialist-photo" />
                <span className="spec-verified-pill">
                  <CheckIcon /> Diplomli
                </span>
                <span className="spec-rating-pill">{s.rating}</span>
              </div>
              <div className="specialist-body">
                <div>
                  <span className="spec-role-label">{s.role}</span>
                  <h3 className="spec-name">{s.name}</h3>
                  <div className="spec-details-row" style={{ marginTop: '8px' }}>
                    <span>Tajriba: {s.exp}</span>
                    <span style={{ color: '#0EA5E9', fontWeight: 700 }}>🟢 Navbatchi</span>
                  </div>
                </div>
                <div className="spec-skills-pills">
                  {s.skills.map((sk) => (
                    <span key={sk} className="ssp-tag">{sk}</span>
                  ))}
                </div>
                <a href="tel:+998712000024" className="btn btn-outline-primary btn-sm btn-full">
                  Bog'lanish va Maslahat
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
