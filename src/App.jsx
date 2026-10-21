import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MetricsStrip from './components/MetricsStrip'
import Services from './components/Services'
import Specialists from './components/Specialists'
import Features from './components/Features'
import Steps from './components/Steps'
import Contact from './components/Contact'
import Download from './components/Download'
import Recruitment from './components/Recruitment'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Register from './components/Register'
import Footer from './components/Footer'
import NurseModal from './components/NurseModal'
import Toast from './components/Toast'
import AuthPage, { getSession, clearSession } from './components/AuthPage'

export default function App() {
  const [user, setUser] = useState(getSession)
  const [isNurseModalOpen, setIsNurseModalOpen] = useState(false)
  const [toast, setToast] = useState({ visible: false, message: '' })

  const showToast = useCallback((msg) => {
    setToast({ visible: true, message: msg })
    setTimeout(() => setToast({ visible: false, message: '' }), 2500)
  }, [])

  const handleAuth = (u) => {
    setUser(u)
    window.scrollTo(0, 0)
    showToast(`Xush kelibsiz, ${u.name.split(' ')[0]}!`)
  }

  const handleLogout = () => {
    clearSession()
    setUser(null)
  }

  if (!user) return <AuthPage onAuth={handleAuth} />

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />

      <main>
        <Hero showToast={showToast} />
        <MetricsStrip />
        <Services />
        <Specialists />
        <Features />
        <Steps />
        <Contact />
        <Download />
        <Recruitment onOpenModal={() => setIsNurseModalOpen(true)} />
        <Testimonials />
        <FAQ />
        <Register />
      </main>

      <Footer />

      <NurseModal isOpen={isNurseModalOpen} onClose={() => setIsNurseModalOpen(false)} />
      <Toast visible={toast.visible} message={toast.message} />
    </>
  )
}
