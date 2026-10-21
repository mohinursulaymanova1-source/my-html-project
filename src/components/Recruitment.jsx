export default function Recruitment({ onOpenModal }) {
  return (
    <section className="recruitment-banner">
      <div className="container">
        <div className="recruitment-card">
          <div>
            <span className="section-tag">Hamkorlik</span>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.25 }}>
              Siz Malakali Hamshiramisiz?
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginTop: '10px' }}>
              MedClinic platformasiga qo'shiling. O'zingizga qulay erkin grafikda ishlang va munosib daromadga ega bo'ling.
            </p>

            <div className="rc-stats">
              <div className="rc-stat">
                <h4>8–15 mln</h4>
                <p>Oylik erkin daromad</p>
              </div>
              <div className="rc-stat">
                <h4>Erkin grafik</h4>
                <p>O'z hududingizda ishlash</p>
              </div>
              <div className="rc-stat">
                <h4>Qonuniy</h4>
                <p>Rasmiy shartnoma</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button type="button" className="btn btn-primary btn-lg" onClick={onOpenModal}>
              <span>Hamshira sifatida qo'shilish</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
