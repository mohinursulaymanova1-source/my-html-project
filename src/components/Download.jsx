export default function Download() {
  return (
    <section className="container" id="download">
      <div className="download-section">
        <div className="container">
          <div className="download-grid">
            <div className="download-content">
              <span
                className="section-tag"
                style={{ background: 'rgba(255,255,255,0.2)', color: '#FFFFFF', border: 'none' }}
              >
                Mobil Ilova
              </span>
              <h2>MedClinic Ilovasini O'rnating</h2>
              <p>
                Mutaxassislar reytingini ko'rish, chaqiruvlarni jonli xaritada kuzatish va qulay tibbiy xizmatlar uchun ilovamizni bepul yuklab oling.
              </p>

              <div className="download-cta-row">
                <a href="#" className="app-store-pill">
                  <svg viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.66-.82 1.11-1.96.99-3.1-.96.04-2.12.65-2.8 1.45-.59.69-1.12 1.83-.98 2.95 1.08.08 2.13-.56 2.79-1.3" />
                  </svg>
                  <div className="asp-text">
                    <small>Yuklab olish</small>
                    <strong>App Store</strong>
                  </div>
                </a>

                <a href="#" className="app-store-pill">
                  <svg viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.22 2.22 0 0 1-.22-.977V2.791c0-.361.08-.7.219-.977zm11.238 11.24l2.457 2.458-11.47 6.477 9.013-8.935zm0-2.108L5.834 1.01 17.304 7.49l-2.457 2.456zm1.054 1.054l2.844-1.604a2.213 2.213 0 0 1 2.21 0l.044.026a1.27 1.27 0 0 1 0 2.203l-2.888 1.629-2.21-2.254z" />
                  </svg>
                  <div className="asp-text">
                    <small>Mavjud</small>
                    <strong>Google Play</strong>
                  </div>
                </a>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div className="download-qr-box">
                <svg viewBox="0 0 100 100" fill="#0F172A">
                  <rect x="10" y="10" width="25" height="25" rx="4" />
                  <rect x="65" y="10" width="25" height="25" rx="4" />
                  <rect x="10" y="65" width="25" height="25" rx="4" />
                  <rect x="15" y="15" width="15" height="15" fill="#FFFFFF" />
                  <rect x="70" y="15" width="15" height="15" fill="#FFFFFF" />
                  <rect x="15" y="70" width="15" height="15" fill="#FFFFFF" />
                  <rect x="19" y="19" width="7" height="7" />
                  <rect x="74" y="19" width="7" height="7" />
                  <rect x="19" y="74" width="7" height="7" />
                  <rect x="45" y="15" width="8" height="8" />
                  <rect x="45" y="30" width="8" height="8" />
                  <rect x="30" y="45" width="8" height="8" />
                  <rect x="45" y="45" width="8" height="8" />
                  <rect x="60" y="45" width="8" height="8" />
                  <rect x="75" y="45" width="8" height="8" />
                  <rect x="45" y="60" width="8" height="8" />
                  <rect x="45" y="75" width="8" height="8" />
                  <rect x="65" y="65" width="10" height="10" />
                  <rect x="80" y="80" width="10" height="10" />
                </svg>
                <span>Kamerani yo'naltiring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
