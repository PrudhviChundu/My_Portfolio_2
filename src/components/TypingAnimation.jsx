import { useState, useEffect } from 'react'
import './TypingAnimation.css'

const TypingAnimation = ({ texts, speed = 100 }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const type = () => {
      const current = texts[textIndex]
      
      if (!isDeleting) {
        if (currentIndex < current.length) {
          setCurrentText(current.substring(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (currentIndex > 0) {
          setCurrentText(current.substring(0, currentIndex - 1))
          setCurrentIndex(currentIndex - 1)
        } else {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % texts.length)
        }
      }
    }

    const timeout = setTimeout(type, isDeleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, textIndex, texts, speed])

  return (
    <span className="typing-animation">
      {currentText}
      <span className="cursor-blink">|</span>
    </span>
  )
}

export default TypingAnimation

