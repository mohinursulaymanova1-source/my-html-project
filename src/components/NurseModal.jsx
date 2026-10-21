export default function NurseModal({ isOpen, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onClose()
    alert("Arizangiz qabul qilindi! Kadrlar bo'limimiz tez orada siz bilan bog'lanadi.")
  }

  return (
    <div className={`modal-overlay${isOpen ? ' active' : ''}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-card">
        <button type="button" className="modal-close-btn" onClick={onClose}>&times;</button>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{ width: '54px', height: '54px', borderRadius: '16px', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="11" cy="7" r="4" />
            </svg>
          </div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>Hamshira sifatida ariza topshirish</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Diplom va tajribangizni kiriting, 24 soat ichida bog'lanamiz
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div className="web-form-group">
            <label className="web-form-label">To'liq ism-familiyangiz</label>
            <input type="text" className="web-form-input" required placeholder="Masalan: Dilnoza Karimova" />
          </div>
          <div className="web-form-group">
            <label className="web-form-label">Telefon raqamingiz</label>
            <input type="tel" className="web-form-input" required defaultValue="+998 " placeholder="+998 90 123 45 67" />
          </div>
          <div className="web-form-group">
            <label className="web-form-label">Mutaxassisligingiz va toifangiz</label>
            <input type="text" className="web-form-input" required placeholder="Masalan: Oliy toifali hamshira, 6 yil tajriba" />
          </div>
          <button type="submit" className="btn btn-primary btn-full" style={{ marginTop: '8px' }}>
            Arizani yuborish
          </button>
        </form>
      </div>
    </div>
  )
}
