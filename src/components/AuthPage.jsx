import { useState } from 'react'

const USERS_KEY = 'medclinic_users'
const SESSION_KEY = 'medclinic_session'
const base = import.meta.env.BASE_URL

const readUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || []
  } catch {
    return []
  }
}

const normalizePhone = (p) => p.replace(/\D/g, '')

const hashPassword = async (password) => {
  const data = new TextEncoder().encode(`medclinic:${password}`)
  const buf = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('')
}

const formatPhone = (value) => {
  let d = value.replace(/\D/g, '')
  if (!d.startsWith('998')) d = '998' + d
  d = d.slice(0, 12)
  const p = [d.slice(0, 3), d.slice(3, 5), d.slice(5, 8), d.slice(8, 10), d.slice(10, 12)].filter(Boolean)
  return '+' + p.join(' ')
}

export const getSession = () => {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY))
  } catch {
    return null
  }
}

export const clearSession = () => {
  try {
    localStorage.removeItem(SESSION_KEY)
  } catch {}
}

const EyeIcon = ({ open }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {open ? (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ) : (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </>
    )}
  </svg>
)

const Field = ({ label, icon, error, children }) => (
  <div className={`auth-field${error ? ' has-error' : ''}`}>
    <label>{label}</label>
    <div className="auth-input-wrap">
      <span className="auth-input-icon">{icon}</span>
      {children}
    </div>
    {error && <span className="auth-error">{error}</span>}
  </div>
)

const icons = {
  user: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
  phone: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="3" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>,
  lock: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
  shield: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>,
}

const EMPTY = { name: '', phone: '+998 ', password: '', confirm: '', agree: false }

const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 37 + 7) % 100}%`,
  size: 10 + ((i * 7) % 16),
  duration: `${14 + ((i * 5) % 12)}s`,
  delay: `-${(i * 3.7) % 20}s`,
  type: i % 3,
}))

const Particle = ({ type }) =>
  type === 0 ? (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" /></svg>
  ) : type === 1 ? (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.5-9.2C1 8.3 3.3 4.5 7 4.5c2 0 3.6 1.1 5 3 1.4-1.9 3-3 5-3 3.7 0 6 3.8 4.5 7.3C19.5 16.4 12 21 12 21z" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="8" /></svg>
  )

export default function AuthPage({ onAuth }) {
  const [mode, setMode] = useState('register')
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const [success, setSuccess] = useState(null)

  const handleSpotlight = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  const isRegister = mode === 'register'

  const set = (field) => (e) => {
    const value = field === 'agree' ? e.target.checked : field === 'phone' ? formatPhone(e.target.value) : e.target.value
    setForm((f) => ({ ...f, [field]: value }))
    setErrors((er) => ({ ...er, [field]: undefined, general: undefined }))
  }

  const switchMode = (m) => {
    setMode(m)
    setErrors({})
    setForm((f) => ({ ...EMPTY, phone: f.phone }))
  }

  const validate = () => {
    const e = {}
    const digits = normalizePhone(form.phone)
    if (isRegister && form.name.trim().length < 3) e.name = "Ism-familiyangizni to'liq kiriting"
    if (digits.length !== 12) e.phone = "Telefon raqam noto'g'ri"
    if (!form.password) e.password = 'Parolni kiriting'
    if (isRegister && form.confirm !== form.password) e.confirm = 'Parollar mos kelmadi'
    if (isRegister && !form.agree) e.agree = 'Shartlarga rozilik bildiring'
    return e
  }

  const finish = (user) => {
    try {
      localStorage.setItem(SESSION_KEY, JSON.stringify(user))
    } catch {}
    setLoading(false)
    setSuccess(user)
    setTimeout(() => setLeaving(true), 1500)
    setTimeout(() => onAuth(user), 1950)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const v = validate()
    if (Object.keys(v).length) return setErrors(v)

    setLoading(true)
    const phone = normalizePhone(form.phone)
    const hash = await hashPassword(form.password)
    await new Promise((r) => setTimeout(r, 600))
    const users = readUsers()
    const existing = users.find((u) => u.phone === phone)

    if (isRegister) {
      if (existing) {
        setLoading(false)
        return setErrors({ phone: "Bu raqam allaqachon ro'yxatdan o'tgan" })
      }
      const user = { name: form.name.trim(), phone }
      try {
        localStorage.setItem(USERS_KEY, JSON.stringify([...users, { ...user, hash }]))
      } catch {}
      return finish(user)
    }

    if (!existing || existing.hash !== hash) {
      setLoading(false)
      return setErrors({ general: "Telefon raqam yoki parol noto'g'ri" })
    }
    finish({ name: existing.name, phone })
  }

  return (
    <div className={`auth-page${leaving ? ' leaving' : ''}`}>
      <div className="auth-orb auth-orb-1" />
      <div className="auth-orb auth-orb-2" />
      <div className="auth-grid-bg" />
      <div className="auth-particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className={`auth-particle t${p.type}`}
            style={{ left: p.left, width: p.size, height: p.size, animationDuration: p.duration, animationDelay: p.delay }}
          >
            <Particle type={p.type} />
          </span>
        ))}
      </div>

      <aside className="auth-showcase">
        <div className="nav-brand">
          <div className="brand-icon-wrap">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 6v12" />
              <path d="M6 12h12" />
              <rect x="3" y="3" width="18" height="18" rx="5" />
            </svg>
          </div>
          <div className="brand-info">
            <span className="brand-name auth-brand-name">Med<span>Clinic</span></span>
            <span className="brand-badge auth-brand-badge">
              <span className="pulse-beacon" /> 24/7 Navbatchi xizmat
            </span>
          </div>
        </div>

        <div className="auth-showcase-body">
          <span className="auth-chip">
            {icons.shield} Litsenziyalangan tibbiy xizmat
          </span>
          <h1>
            Sog'lig'ingiz — <span className="gradient-text">bir bosishda</span> ishonchli qo'llarda
          </h1>
          <p>
            Hisob yarating va malakali hamshira yoki shifokorni 15–20 daqiqada uyingizga chaqiring. Barcha muolajalar tarixi bir joyda.
          </p>

          <svg className="auth-ecg" viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="ecgGrad" x1="0" x2="1">
                <stop offset="0" stopColor="#14B8A6" stopOpacity="0" />
                <stop offset="0.5" stopColor="#14B8A6" />
                <stop offset="1" stopColor="#6366F1" />
              </linearGradient>
            </defs>
            <path
              pathLength="1"
              d="M0 30 H110 L122 30 L130 12 L140 50 L150 4 L162 56 L172 30 H230 L240 30 L246 20 L254 40 L260 30 H400"
            />
          </svg>

          <div className="auth-team">
            <div className="auth-avatars">
              {['nurse_madina', 'doctor_jasur', 'nurse_dilnoza', 'nurse_timur'].map((n) => (
                <img key={n} src={`${base}images/${n}.jpg`} alt="" />
              ))}
            </div>
            <div>
              <strong>450+ mutaxassis</strong>
              <span>hozir navbatchilikda</span>
            </div>
          </div>
        </div>

        <div className="auth-stats">
          {[
            ['25K+', 'Muolajalar'],
            ['4.95★', 'Reyting'],
            ['15 daq', "O'rtacha kelish"],
          ].map(([n, l]) => (
            <div key={l} className="auth-stat">
              <span className="auth-stat-num">{n}</span>
              <span className="auth-stat-label">{l}</span>
            </div>
          ))}
        </div>
      </aside>

      <main className="auth-panel">
        <div className="auth-card" onMouseMove={handleSpotlight}>
          <span className="auth-card-spot" aria-hidden="true" />
          {success && (
            <div className="auth-success" role="status">
              <svg className="auth-success-check" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="34" pathLength="1" />
                <path d="M26 41 l9 9 l19 -20" pathLength="1" />
              </svg>
              <h3>Xush kelibsiz, {success.name.split(' ')[0]}!</h3>
              <p>{isRegister ? 'Hisobingiz muvaffaqiyatli yaratildi' : 'Muvaffaqiyatli kirdingiz'}</p>
              <div className="auth-success-bar"><span /></div>
              <div className="auth-confetti" aria-hidden="true">
                {Array.from({ length: 18 }, (_, i) => (
                  <i key={i} style={{ '--a': `${i * 20}deg`, '--d': `${70 + (i % 4) * 22}px`, '--c': i % 3 === 0 ? '#14B8A6' : i % 3 === 1 ? '#6366F1' : '#F59E0B' }} />
                ))}
              </div>
            </div>
          )}
          <div className="auth-tabs" role="tablist">
            <span className={`auth-tab-indicator${isRegister ? '' : ' right'}`} />
            <button type="button" role="tab" aria-selected={isRegister} className={isRegister ? 'active' : ''} onClick={() => switchMode('register')}>
              Ro'yxatdan o'tish
            </button>
            <button type="button" role="tab" aria-selected={!isRegister} className={!isRegister ? 'active' : ''} onClick={() => switchMode('login')}>
              Kirish
            </button>
          </div>

          <div className="auth-head" key={mode}>
            <h2>{isRegister ? 'Hisob yaratish' : 'Xush kelibsiz!'}</h2>
            <p>{isRegister ? "Bir daqiqada ro'yxatdan o'ting va xizmatlardan foydalaning" : 'Davom etish uchun hisobingizga kiring'}</p>
          </div>

          {errors.general && <div className="auth-alert">{errors.general}</div>}

          <form onSubmit={handleSubmit} noValidate className="auth-form" key={`f-${mode}`}>
            {isRegister && (
              <Field label="Ism-familiya" icon={icons.user} error={errors.name}>
                <input type="text" autoComplete="name" placeholder="Masalan: Dilnoza Karimova" value={form.name} onChange={set('name')} />
              </Field>
            )}

            <Field label="Telefon raqam" icon={icons.phone} error={errors.phone}>
              <input type="tel" autoComplete="tel" inputMode="tel" placeholder="+998 90 123 45 67" value={form.phone} onChange={set('phone')} />
            </Field>

            <Field label="Parol" icon={icons.lock} error={errors.password}>
              <input
                type={showPass ? 'text' : 'password'}
                autoComplete={isRegister ? 'new-password' : 'current-password'}
                placeholder="Parolingiz"
                value={form.password}
                onChange={set('password')}
              />
              <button type="button" className="auth-eye" aria-label="Parolni ko'rsatish" onClick={() => setShowPass((v) => !v)}>
                <EyeIcon open={showPass} />
              </button>
            </Field>

            {isRegister && (
              <Field label="Parolni tasdiqlang" icon={icons.lock} error={errors.confirm}>
                <input type={showPass ? 'text' : 'password'} autoComplete="new-password" placeholder="Parolni qayta kiriting" value={form.confirm} onChange={set('confirm')} />
              </Field>
            )}

            {isRegister ? (
              <label className={`auth-check${errors.agree ? ' has-error' : ''}`}>
                <input type="checkbox" checked={form.agree} onChange={set('agree')} />
                <span className="auth-checkbox" />
                <span>Foydalanish shartlari va maxfiylik siyosatiga roziman</span>
              </label>
            ) : (
              <div className="auth-row">
                <label className="auth-check">
                  <input type="checkbox" defaultChecked />
                  <span className="auth-checkbox" />
                  <span>Eslab qolish</span>
                </label>
                <button type="button" className="auth-link">Parolni unutdingizmi?</button>
              </div>
            )}

            <button type="submit" className="btn btn-primary btn-full btn-lg auth-submit" disabled={loading}>
              {loading ? (
                <span className="auth-spinner" />
              ) : (
                <>
                  {isRegister ? "Ro'yxatdan o'tish" : 'Kirish'}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </>
              )}
            </button>
          </form>

          <p className="auth-switch">
            {isRegister ? 'Hisobingiz bormi?' : "Hisobingiz yo'qmi?"}{' '}
            <button type="button" className="auth-link" onClick={() => switchMode(isRegister ? 'login' : 'register')}>
              {isRegister ? 'Kirish' : "Ro'yxatdan o'tish"}
            </button>
          </p>
        </div>

        <p className="auth-footnote">
          {icons.shield} Ma'lumotlaringiz shifrlangan holda saqlanadi
        </p>
      </main>
    </div>
  )
}
