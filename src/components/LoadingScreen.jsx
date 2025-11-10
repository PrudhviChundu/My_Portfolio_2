import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './LoadingScreen.css'

const LoadingScreen = ({ onComplete }) => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    // Complete loading after animation
    const timer = setTimeout(() => {
      setLoading(false)
      setTimeout(() => {
        onComplete()
      }, 500)
    }, 2000)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [onComplete])

  return (
    <motion.div
      className={`loading-screen ${!loading ? 'fade-out' : ''}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-content">
        <div className="loading-image-container">
          <div className="loading-image-wrapper">
            <img 
              src="/profile.png" 
              alt="Loading" 
              className="loading-image"
              onError={(e) => {
                e.target.style.display = 'none'
                if (e.target.nextSibling) {
                  e.target.nextSibling.style.display = 'flex'
                }
              }}
            />
            <div className="loading-placeholder" style={{ display: 'none' }}>
              <span>SK</span>
            </div>
          </div>
          <div className="loading-ring ring-1"></div>
          <div className="loading-ring ring-2"></div>
          <div className="loading-ring ring-3"></div>
        </div>

        <motion.div
          className="loading-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2>Prudhvi</h2>
          <p>Loading Portfolio...</p>
        </motion.div>

        <div className="loading-progress">
          <motion.div
            className="loading-progress-bar"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <motion.div
          className="loading-code"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="code-line">
            <span className="code-keyword">const</span>{' '}
            <span className="code-variable">portfolio</span> = {'{'}
          </div>
          <div className="code-line indent">
            <span className="code-property">status</span>:{' '}
            <span className="code-string">'Loading'</span>,
          </div>
          <div className="code-line indent">
            <span className="code-property">progress</span>:{' '}
            <span className="code-number">{progress}%</span>
          </div>
          <div className="code-line">{'}'}</div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen

