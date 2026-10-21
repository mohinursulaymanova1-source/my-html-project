import useScrollReveal from '../hooks/useScrollReveal'

const METRICS = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    value: '15–20 daq',
    label: "O'rtacha yetib borish vaqti",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    value: '450+ nafar',
    label: 'Diplomli mutaxassislar',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    value: '25 000+',
    label: 'Muvaffaqiyatli muolajalar',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    value: '4.95 / 5.0',
    label: "Bemorlar qoniqish ko'rsatkichi",
  },
]

export default function MetricsStrip() {
  const revealRef = useScrollReveal()
  return (
    <section className="metrics-strip">
      <div className="container">
        <div className="metrics-grid" ref={revealRef}>
          {METRICS.map((m, i) => (
            <div key={m.value} className={`metric-card reveal reveal-delay-${i + 1}`}>
              <div className="mc-icon">{m.icon}</div>
              <div className="mc-content">
                <h4>{m.value}</h4>
                <p>{m.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
