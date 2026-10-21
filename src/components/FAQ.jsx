import { useState } from 'react'

const FAQS = [
  {
    q: 'Hamshiralar qanchalik tez yetib keladi?',
    a: "Bizning tizim geolokatsiya orqali manzilga eng yaqin masofada bo'lgan bo'sh navbatchi hamshirani aniqlaydi. Toshkent shahri bo'ylab o'rtacha yetib borish vaqti 15–25 daqiqani tashkil etadi.",
  },
  {
    q: 'Dori vositalari va shpritslarni kim olib keladi?',
    a: "Shifokor tomonidan tavsiya etilgan dori vositalari (ampula, flakon) bemor tomonidan taqdim etiladi. Hamshira esa o'zi bilan barcha steril sarflov asboblarini (bir martalik shpritslar, spirtli salfetkalar, paxta, leykoplastir, turniket va bosim o'lchagich) olib keladi.",
  },
  {
    q: "Hamshiralarning diplomi va malakasi bormi?",
    a: "Ha, platformamizda faqat tibbiyot kolleji yoki oliy ma'lumotli, amaldagi toifa va litsenziyaga ega hamda kamida 3 yillik amaliy statsionar tajribaga ega bo'lgan mutaxassislar ro'yxatdan o'tkaziladi.",
  },
  {
    q: "Xizmat uchun to'lov qanday amalga oshiriladi?",
    a: "To'lov muolaja to'liq va muvaffaqiyatli bajarilgandan so'ng naqd pul yoki Click, Payme, Uzum ilovalari orqali to'lanishi mumkin.",
  },
  {
    q: "Tunda yoki dam olish kunlari ham chaqirsa bo'ladimi?",
    a: "Ha! MedClinic 24/7 rejimida ishlaydi. Kechasi soat 23:00 dan keyin ham navbatchi mutaxassislarimiz qo'ng'iroqlarni qabul qilishadi.",
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggle = (i) => setActiveIndex(activeIndex === i ? -1 : i)

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Savol-Javob</span>
          <h2 className="section-title">Ko'p Beriladigan Savollar</h2>
          <p className="section-subtitle">
            Xizmat va mutaxassislar bo'yicha eng muhim savollarga javoblar
          </p>
        </div>

        <div className="faq-container">
          {FAQS.map((faq, i) => (
            <div key={i} className={`faq-item${activeIndex === i ? ' active' : ''}`}>
              <button
                type="button"
                className="faq-question-btn"
                onClick={() => toggle(i)}
              >
                <span>{faq.q}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
