import useScrollReveal from '../hooks/useScrollReveal'

const FEATURES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <polygon points="12 2 19 21 12 17 5 21 12 2" />
      </svg>
    ),
    title: 'Tezkor GPS Topish',
    desc: "Tizim joylashuvingizga qarab eng yaqin masofadagi (500m - 2km) bo'sh hamshirani 2 daqiqada topadi va biriktiradi.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "100% Tasdiqlangan Mutaxassislar",
    desc: "Har bir tibbiyot xodimining diplomi, toifasi va statsionar ish tajribasi qat'iy nazoratdan o'tkaziladi.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "To'liq Sterillik va Xavfsizlik",
    desc: "Har bir muolaja faqat bir martalik steril shprits, tizim, qo'lqop va antiseptik vositalar bilan amalga oshiriladi.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: '24/7 Kechayu-Kunduz Xizmat',
    desc: "Kunning istalgan vaqtida — ertalab, tunda yoki dam olish kunlarida ham navbatchi hamshiralar xizmatingizda.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    title: 'Jonli Bildirishnoma va Kuzatish',
    desc: "Hamshiraning chaqiruvni qabul qilishi, yo'lga chiqishi va kelish vaqti xarita orqali onlayn aks etadi.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Hamshiralar uchun CRM',
    desc: "Tibbiyot xodimlari uchun qulay shaxsiy kabinet, erkin ish jadvali va shaffof kunlik daromad tizimi.",
  },
]

export default function Features() {
  const revealRef = useScrollReveal()
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Ilova Afzalliklari</span>
          <h2 className="section-title">Nega Aynan MedClinic?</h2>
          <p className="section-subtitle">
            Zamonaviy texnologiya va professional tibbiy nazoratni birlashtirgan ishonchli tizim
          </p>
        </div>

        <div className="features-grid" ref={revealRef}>
          {FEATURES.map((f, i) => (
            <div key={f.title} className={`feature-box reveal reveal-delay-${i + 1}`}>
              <div className="fb-icon-wrap">{f.icon}</div>
              <h3 className="fb-title">{f.title}</h3>
              <p className="fb-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
