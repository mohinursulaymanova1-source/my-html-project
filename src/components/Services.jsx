import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const SERVICES = [
  {
    category: 'injections',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="m18 2 4 4" /><path d="m17 7 3-3" />
        <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
        <path d="m5 19-3 3" />
      </svg>
    ),
    title: 'Vena ichiga ukol',
    desc: "Qiyin va ko'rinmas tomirlarga ham og'riqsiz, tezkor inyeksiya qilish malakasi.",
    features: ['Bir martalik steril shprits va igna', 'Inyeksiyadan keyin holat nazorati'],
    price: '25 000',
    priceLabel: 'har bir muolaja',
    featured: false,
  },
  {
    category: 'injections',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M12 2v6" /><path d="m4.93 10.93 4.24 4.24" />
        <path d="M12 22a7 7 0 0 0 7-7c0-2-2-3-2-3s.5-1.5.5-3a5.5 5.5 0 0 0-11 0c0 1.5.5 3 .5 3s-2 1-2 3a7 7 0 0 0 7 7z" />
      </svg>
    ),
    title: 'Tomchilovchi dori (Kapelnitsa)',
    desc: "Kateter o'rnatish, dori tezligini sozlash va bemor tomir urishi, qon bosimini to'liq nazorat qilish.",
    features: ["Tugaguncha hamshira bemor yonida bo'ladi", "Qon bosimi va puls o'lchash bepul"],
    price: '70 000',
    priceLabel: '1 ta flakon uchun',
    featured: true,
    featuredLabel: "Eng ko'p talab",
  },
  {
    category: 'care',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: 'Yara bog\'lash va perevyazka',
    desc: "Operatsiyadan keyingi choklar, kuyish, jarohat va bosim yaralarini antiseptik bilan tozalash.",
    features: ['Steril bog\'lov materiallari', 'Choklarni olish va qayta ishlash'],
    price: '40 000',
    priceLabel: 'har bir bog\'lash',
    featured: false,
  },
  {
    category: 'injections',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8" /><path d="M8 12h8" />
      </svg>
    ),
    title: 'Mushak ichiga ukol',
    desc: "Antibiotiklar, vitaminlar va og'riqsizlantiruvchi vositalarni professional yuborish.",
    features: ['Yengil va mutlaqo og\'riqsiz', 'Har kuni navbatli kelish'],
    price: '20 000',
    priceLabel: '1 ta inyeksiya',
    featured: false,
  },
  {
    category: 'special',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Bolalar uchun muolajalar',
    desc: "Kichik yoshdagi bolalarga qo'rquvsiz, samimiy mehr bilan ukol va tibbiy muolajalar o'tkazish.",
    features: ['Pediatriya sertifikatiga ega hamshira', "Bolani chalg'ituvchi maxsus yondashuv"],
    price: '45 000',
    priceLabel: 'har bir muolaja',
    featured: false,
  },
  {
    category: 'special',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "EKG va Bosim o'lchash",
    desc: "Uy sharoitida ko'chma elektrokardiografiya o'tkazish va kardiolog maslahati.",
    features: ['Kardiogramma lentasini joyida berish', 'Tezkor xulosa va tavsiyalar'],
    price: '50 000',
    priceLabel: 'EKG tekshiruv',
    featured: false,
  },
]

const CATEGORIES = [
  { key: 'all', label: 'Barcha xizmatlar' },
  { key: 'injections', label: 'Ukol va Kapelnitsalar' },
  { key: 'care', label: 'Yara parvarishi va bog\'lov' },
  { key: 'special', label: 'Bolalar va Diagnostika' },
]

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all')
  const revealRef = useScrollReveal()

  const filtered = SERVICES.filter(
    (s) => activeCategory === 'all' || s.category === activeCategory
  )

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Shaffof Tariflar</span>
          <h2 className="section-title">Tibbiy Muolajalar va Xizmatlar</h2>
          <p className="section-subtitle">
            Barcha muolajalar qat'iy narxlarda. Yashirin to'lovlarsiz, 100% steril bir martalik vositalar bilan amalga oshiriladi
          </p>
        </div>

        <div className="services-filter-bar">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              type="button"
              className={`sfb-btn${activeCategory === c.key ? ' active' : ''}`}
              onClick={() => setActiveCategory(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="services-grid" ref={revealRef}>
          {filtered.map((s, i) => (
            <div key={s.title} className={`service-card${s.featured ? ' featured' : ''} reveal reveal-delay-${i + 1}`}>
              {s.featured && <span className="service-featured-pill">{s.featuredLabel}</span>}
              <div className="sc-top">
                <div className="sc-icon-wrap">{s.icon}</div>
                <h3 className="sc-title">{s.title}</h3>
                <p className="sc-desc">{s.desc}</p>
                <div className="sc-features-list">
                  {s.features.map((f) => (
                    <div key={f} className="sc-feature-item">
                      <CheckIcon />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="sc-bottom">
                <div className="sc-price-box">
                  <span className="sc-price">{s.price} <small>so'm</small></span>
                  <small>{s.priceLabel}</small>
                </div>
                <a
                  href="tel:+998712000024"
                  className={`btn ${s.featured ? 'btn-primary' : 'btn-outline-primary'} btn-sm`}
                >
                  Ma'lumot olish
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
