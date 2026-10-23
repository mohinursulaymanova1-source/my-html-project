import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`navbar${isScrolled ? ' scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-brand">
          <div className="brand-icon-wrap">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 6v12" />
              <path d="M6 12h12" />
              <rect x="3" y="3" width="18" height="18" rx="5" />
            </svg>
          </div>
          <div className="brand-info">
            <a href="#" className="brand-name">Med<span>Clinic</span></a>
            <span className="brand-badge">
              <span className="pulse-beacon" /> 24/7 Navbatchi xizmat
            </span>
          </div>
        </div>

        <nav className={`nav-menu${isMenuOpen ? ' active' : ''}`} id="navMenu">
          <a href="#services" className="nav-link" onClick={closeMenu}>Xizmatlar</a>
          <a href="#specialists" className="nav-link" onClick={closeMenu}>Mutaxassislar</a>
          <a href="#features" className="nav-link" onClick={closeMenu}>Imkoniyatlar</a>
          <a href="#steps" className="nav-link" onClick={closeMenu}>Jarayon</a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>Bog'lanish</a>
          <a href="#faq" className="nav-link" onClick={closeMenu}>Savollar</a>
          <a href="#register" className="nav-link" onClick={closeMenu}>Ro'yxat</a>
        </nav>

        <div className="nav-actions">
          <a href="#register" className="nav-register-btn">
            Ro'yxatdan o'tish
          </a>
          <a href="tel:+998712000024" className="nav-contact-btn">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+998 71 200 00 24</span>
          </a>
          <button
            className="menu-toggle"
            aria-label="Menyu"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
