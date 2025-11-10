import { useEffect, useRef, useState } from 'react'
import './TextReveal.css'

const TextReveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const textRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 }
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current)
      }
    }
  }, [delay])

  return (
    <span ref={textRef} className={`text-reveal ${isVisible ? 'revealed' : ''}`}>
      {children}
    </span>
  )
}

export default TextReveal

