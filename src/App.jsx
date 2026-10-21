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
import Footer from './components/Footer'
import NurseModal from './components/NurseModal'
import Toast from './components/Toast'

export default function App() {
  const [isNurseModalOpen, setIsNurseModalOpen] = useState(false)
  const [toast, setToast] = useState({ visible: false, message: '' })

  const showToast = useCallback((msg) => {
    setToast({ visible: true, message: msg })
    setTimeout(() => setToast({ visible: false, message: '' }), 2500)
  }, [])

  return (
    <>
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />
      <div className="bg-glow bg-glow-3" />

      <Navbar />

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
      </main>

      <Footer />

      <NurseModal isOpen={isNurseModalOpen} onClose={() => setIsNurseModalOpen(false)} />
      <Toast visible={toast.visible} message={toast.message} />
    </>
  )
}
