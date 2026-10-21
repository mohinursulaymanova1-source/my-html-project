import { useState } from 'react'

const SERVICES = ['Vena ukoli', 'Kapelnitsa', 'Yara bog\'lash', 'Mushak ukoli', 'Bolalar muolaja', 'EKG tekshiruv']

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function Register() {
  const [selectedService, setSelectedService] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '+998 ', district: '', date: '', note: '' })

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="register-section" id="register">
      <div className="container">
        <div className="register-inner">
          <div className="register-info">
            <div className="section-header" style={{ marginBottom: 0 }}>
              <span className="section-tag">Onlayn Ro'yxat</span>
              <h2>
                Hoziroq <span className="gradient-text">ro'yxatdan o'ting</span>,<br />
                hamshira uyingizga keladi
              </h2>
              <p>
                Muolaja sanasini belgilang, biz eng yaqin malakali mutaxassisni 2 daqiqada topamiz va tasdiqlashni yuboramiz.
              </p>
            </div>

            <div className="register-benefits">
              {[
                "Ro'yxatdan o'tish bepul va majburiy emas",
                '15–20 daqiqada mutaxassis uyingizda',
                'Tasdiqlash SMS va qo\'ng\'iroq bilan',
              ].map((item) => (
                <div key={item} className="rb-item">
                  <div className="rb-icon"><CheckIcon /></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="register-stats-row">
              <div className="rs-stat">
                <span className="rs-stat-num">25K+</span>
                <span className="rs-stat-label">Muvaffaqiyatli muolajalar</span>
              </div>
              <div className="rs-stat">
                <span className="rs-stat-num">4.95★</span>
                <span className="rs-stat-label">Mijozlar reytingi</span>
              </div>
              <div className="rs-stat">
                <span className="rs-stat-num">450+</span>
                <span className="rs-stat-label">Navbatchi mutaxassis</span>
              </div>
            </div>
          </div>

          <div className="register-form-card">
            {submitted ? (
              <div className="register-success">
                <div className="register-success-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4>So'rovingiz qabul qilindi!</h4>
                <p>
                  Dispetcherimiz 2–3 daqiqa ichida <strong style={{ color: 'var(--primary)' }}>{form.phone}</strong> raqamingizga qo'ng'iroq qiladi va mutaxassisni tasdiqlaydi.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '+998 ', district: '', date: '', note: '' }); setSelectedService('') }}
                >
                  Yangi so'rov
                </button>
              </div>
            ) : (
              <>
                <h3>Mutaxassis chaqirish</h3>
                <p>Barcha maydonlarni to'ldiring, tez orada bog'lanamiz</p>

                <form onSubmit={handleSubmit} className="dark-form">
                  <div className="form-group">
                    <label>Ism-familiyangiz</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Masalan: Dilnoza Karimova"
                      value={form.name}
                      onChange={set('name')}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Telefon raqam</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="+998 90 123 45 67"
                      value={form.phone}
                      onChange={set('phone')}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Tuman / Manzil</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Masalan: Chilonzor 7-mavze, 12-uy"
                      value={form.district}
                      onChange={set('district')}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Xizmat turi</label>
                    <div className="service-pills">
                      {SERVICES.map((s) => (
                        <button
                          key={s}
                          type="button"
                          className={`service-pill${selectedService === s ? ' active' : ''}`}
                          onClick={() => setSelectedService(s)}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Muolaja sanasi</label>
                    <input
                      type="date"
                      className="form-control"
                      value={form.date}
                      onChange={set('date')}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Izoh (ixtiyoriy)</label>
                    <textarea
                      className="form-control"
                      placeholder="Qo'shimcha ma'lumot yoki maxsus so'rovlar..."
                      value={form.note}
                      onChange={set('note')}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-full" style={{ marginTop: '8px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                    Mutaxassis chaqirish
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
