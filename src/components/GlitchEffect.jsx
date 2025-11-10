import { useEffect, useState } from 'react'
import './GlitchEffect.css'

const GlitchEffect = ({ text, className = '' }) => {
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 200)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className={`glitch-text ${glitch ? 'glitch-active' : ''} ${className}`}>
      <span className="glitch-text-main">{text}</span>
      <span className="glitch-text-clone glitch-text-clone-1">{text}</span>
      <span className="glitch-text-clone glitch-text-clone-2">{text}</span>
    </span>
  )
}

export default GlitchEffect

