export default function Toast({ visible, message }) {
  return (
    <div className={`toast-notice${visible ? ' show' : ''}`}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2.5">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span>{message}</span>
    </div>
  )
}
