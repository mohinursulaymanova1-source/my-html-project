import { useRef } from 'react'

const CHANNELS = [
  {
    href: 'tel:+998712000024',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: 'Markaziy Dispetcher',
    desc: "Toshkent shahri bo'ylab kunu-tun qo'ng'iroqlarni qabul qilish",
    action: '+998 71 200 00 24',
  },
  {
    href: 'tel:+998901234567',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'Tezkor Mobil Liniya',
    desc: "Bosh shifokor va navbatchi hamshira bilan to'g'ridan-to'g'ri bog'lanish",
    action: '+998 90 123 45 67',
  },
  {
    href: 'https://t.me',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
        <path d="M21.5 2L2 9.5l7 3 2 7 3.5-4.5 4.5 3.5L21.5 2z" />
      </svg>
    ),
    title: 'Telegram Bot / Admin',
    desc: "Onlayn chat orqali tezkor javob olish va maslahat so'rash",
    action: '@MedClinicUz_bot',
    external: true,
  },
]

export default function Contact() {
  const nameRef = useRef()
  const phoneRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = nameRef.current.value
    const phone = phoneRef.current.value
    alert(`Rahmat, ${name}! So'rovingiz qabul qilindi. Navbatchi dispetcherimiz 2 daqiqa ichida ${phone} raqamingizga qo'ng'iroq qiladi.`)
    e.target.reset()
    phoneRef.current.value = '+998 '
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-card-wrapper">
          <div className="section-header text-center">
            <span className="section-tag">Tezkor Aloqa</span>
            <h2 className="section-title">24/7 Navbatchi Tibbiy Dispetcher</h2>
            <p className="section-subtitle">
              Savollaringiz bormi yoki zudlik bilan mutaxassis maslahati kerakmi? Biz bilan istalgan qulay usulda bog'laning
            </p>
          </div>

          <div className="contact-channels-grid">
            {CHANNELS.map((ch) => (
              <a
                key={ch.title}
                href={ch.href}
                className="contact-channel-box"
                {...(ch.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <div className="ccb-icon">{ch.icon}</div>
                <h4>{ch.title}</h4>
                <p>{ch.desc}</p>
                <span className="ccb-action-text">{ch.action}</span>
              </a>
            ))}
          </div>

          <div className="quick-inquiry-box">
            <h4 className="qib-title">Qo'ng'iroqqa buyurtma berish</h4>
            <p className="qib-subtitle">
              Telefon raqamingizni qoldiring, mutaxassisimiz 2 daqiqa ichida siz bilan bog'lanadi
            </p>
            <form className="qib-grid" onSubmit={handleSubmit}>
              <input
                ref={nameRef}
                type="text"
                className="qib-input"
                placeholder="Ismingiz"
                required
              />
              <input
                ref={phoneRef}
                type="tel"
                className="qib-input"
                placeholder="+998 90 123 45 67"
                defaultValue="+998 "
                required
              />
              <button type="submit" className="btn btn-primary">
                <span>Qo'ng'iroq qilishni so'rash</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
