import useScrollReveal from '../hooks/useScrollReveal'

const TESTIMONIALS = [
  {
    initials: 'BK',
    name: 'Bekzod Komilov',
    location: 'Toshkent, Yunusobod',
    text: '"Onamga 5 kunlik kapelnitsa buyurilgan edi. Har kuni poliklinikaga olib borish juda og\'ir bo\'lardi. MedClinic orqali Malika opani chaqirdik, 15 daqiqada yetib keldilar. Juda muloyim va qo\'llari yengil ekan."',
  },
  {
    initials: 'NS',
    name: 'Nilufar Sobirova',
    location: 'Toshkent, Chilonzor',
    text: '"Kechasi 23:30 da farzandimning harorati ko\'tarilib ketdi. MedClinic dispetcheriga qo\'ng\'iroq qildik, 12 daqiqada kelib, kerakli muolajani qilib, haroratni tushirishdi. Rahmat sizlarga!"',
  },
  {
    initials: 'OI',
    name: 'Otabek Ismoilov',
    location: "Toshkent, Mirzo Ulug'bek",
    text: '"Operatsiyadan keyin jarohat choklarini steril tozalash kerak edi. Timurjon usta hamshira ekan, hech qanday og\'riqsiz tozalab, bog\'lab berdi. Narxlari ham juda mos va shaffof."',
  },
]

export default function Testimonials() {
  const revealRef = useScrollReveal()
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Mijozlarimiz Fikrlari</span>
          <h2 className="section-title">Minnatdor Bemorlar Sharhlari</h2>
          <p className="section-subtitle">
            Xizmatimizdan foydalangan yurtdoshlarimizning haqiqiy fikrlari
          </p>
        </div>

        <div className="testimonials-grid" ref={revealRef}>
          {TESTIMONIALS.map((t, i) => (
            <div key={t.initials} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
              <div className="tc-stars">★★★★★</div>
              <p className="tc-text">{t.text}</p>
              <div className="tc-author">
                <div className="tc-author-avatar">{t.initials}</div>
                <div className="tc-author-info">
                  <strong>{t.name}</strong>
                  <small>{t.location}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
