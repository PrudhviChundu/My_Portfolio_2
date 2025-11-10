import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './ScrollSpinImage.css'

const ScrollSpinImage = () => {
  const imageRef = useRef(null)
  const [rotation, setRotation] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Calculate rotation based on scroll position
      // 360 degrees per 1000px of scroll
      const newRotation = (scrollY * 0.36) % 360
      setRotation(newRotation)

      // Check if image is visible
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect()
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0
        setIsVisible(isInViewport)
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      ref={imageRef}
      className="profile-image-wrapper scroll-spin-wrapper"
      style={{
        rotate: rotation,
      }}
      animate={{
        scale: isVisible ? [1, 1.05, 1] : 1,
      }}
      transition={{
        scale: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
        rotate: {
          type: 'spring',
          stiffness: 50,
          damping: 15,
        },
      }}
    >
      <div className="profile-glow"></div>
      <img 
        src="/profile.png" 
        alt="Prudhvi Chundu"
        className="profile-image"
        onError={(e) => {
          e.target.style.display = 'none'
          if (e.target.nextSibling) {
            e.target.nextSibling.style.display = 'flex'
          }
        }}
      />
      <div className="profile-placeholder" style={{ display: 'none' }}>
        <span>SK</span>
      </div>
      <div className="spin-ring-ring-1"></div>
      <div className="spin-ring-ring-2"></div>
    </motion.div>
  )
}

export default ScrollSpinImage

