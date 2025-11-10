import { useRef, useEffect } from 'react'
import './MagneticButton.css'

const MagneticButton = ({ children, className = '', as: Component = 'button', ...props }) => {
  const buttonRef = useRef(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      const distance = Math.sqrt(x * x + y * y)
      const maxDistance = 100

      if (distance < maxDistance) {
        const moveX = (x / maxDistance) * 20
        const moveY = (y / maxDistance) * 20

        button.style.transform = `translate(${moveX}px, ${moveY}px)`
      }
    }

    const handleMouseLeave = () => {
      button.style.transform = 'translate(0, 0)'
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <Component
      ref={buttonRef}
      className={`magnetic-button ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default MagneticButton

