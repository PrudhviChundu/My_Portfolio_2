import { useEffect, useRef } from 'react'
import './MorphingBlob.css'

const MorphingBlob = () => {
  const blobRef = useRef(null)

  useEffect(() => {
    const blob = blobRef.current
    if (!blob) return

    let animationFrame
    let time = 0

    const animate = () => {
      time += 0.01
      const x = Math.sin(time) * 20 + 50
      const y = Math.cos(time * 1.2) * 20 + 50
      const radius1 = 30 + Math.sin(time * 2) * 10
      const radius2 = 40 + Math.cos(time * 1.5) * 10
      const radius3 = 35 + Math.sin(time * 1.8) * 10
      const radius4 = 25 + Math.cos(time * 2.2) * 10

      const path = `
        M ${x} ${y}
        m ${-radius1}, 0
        a ${radius1},${radius1} 0 1,0 ${radius1 * 2},0
        a ${radius1},${radius1} 0 1,0 ${-radius1 * 2},0
        m ${radius1 + radius2}, ${-radius2}
        a ${radius2},${radius2} 0 1,0 ${-radius2 * 2},0
        a ${radius2},${radius2} 0 1,0 ${radius2 * 2},0
        m ${-radius2 - radius3}, ${radius3}
        a ${radius3},${radius3} 0 1,0 ${radius3 * 2},0
        a ${radius3},${radius3} 0 1,0 ${-radius3 * 2},0
        m ${radius3 + radius4}, ${radius4}
        a ${radius4},${radius4} 0 1,0 ${-radius4 * 2},0
        a ${radius4},${radius4} 0 1,0 ${radius4 * 2},0
      `

      // Simpler approach using border-radius animation
      const radius = 40 + Math.sin(time) * 15
      blob.style.borderRadius = `${radius}% ${100 - radius}% ${radius}% ${100 - radius}% / ${100 - radius}% ${radius}% ${100 - radius}% ${radius}%`

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="morphing-blob-container">
      <div ref={blobRef} className="morphing-blob blob-1"></div>
      <div className="morphing-blob blob-2"></div>
      <div className="morphing-blob blob-3"></div>
    </div>
  )
}

export default MorphingBlob

