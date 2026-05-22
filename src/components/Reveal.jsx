import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0, style }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setTimeout(() => setShown(true), delay)
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <Tag ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`} style={style}>
      {children}
    </Tag>
  )
}
