import useScrollReveal from '../hooks/useScrollReveal'

const STEPS = [
  {
    num: 1,
    title: 'Muolajani tanlaysiz',
    desc: "Zarur tibbiy xizmat turi va uyingiz manzilini telefon yoki ilova orqali bildirasiz.",
  },
  {
    num: 2,
    title: 'Mutaxassis biriktiriladi',
    desc: "Eng yaqin navbatchi malakali mutaxassis so'rovni qabul qilib, zudlik bilan yo'lga chiqadi.",
  },
  {
    num: 3,
    title: '15 daqiqada yetib boradi',
    desc: "Mutaxassis barcha kerakli steril vosita va asboblar bilan uyingizga yetib keladi.",
  },
  {
    num: 4,
    title: 'Xavfsiz muolaja va nazorat',
    desc: "Muolaja yuqori aniqlikda bajariladi, bemorning ahvoli tekshirilib tavsiyalar beriladi.",
  },
]

export default function Steps() {
  const revealRef = useScrollReveal()
  return (
    <section className="steps-section" id="steps">
      <div className="container">
        <div className="section-header text-center">
          <span
            className="section-tag"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}
          >
            Oddiy va Qulay
          </span>
          <h2 className="section-title">Chaqiruv Qanday Amalga Oshiriladi?</h2>
          <p className="section-subtitle">
            Xizmatdan foydalanish bir necha qulay va sodda bosqichlardan iborat
          </p>
        </div>

        <div className="steps-grid" ref={revealRef}>
          {STEPS.map((s, i) => (
            <div key={s.num} className={`step-card reveal reveal-delay-${i + 1}`}>
              <div className="step-num-badge">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
