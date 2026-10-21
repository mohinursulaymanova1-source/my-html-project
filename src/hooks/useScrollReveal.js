import { useEffect, useRef } from 'react'

export default function useScrollReveal() {
  const ref = useRef()

  useEffect(() => {
    const container = ref.current
    if (!container) return
    if (!window.IntersectionObserver) {
      container.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
      return
    }
    const items = container.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return ref
}