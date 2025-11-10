import { useEffect, useRef } from 'react'
import './DeveloperBackground.css'

const DeveloperBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Code snippets that will float
    const codeSnippets = [
      { text: 'const developer = {', color: '#10b981' },
      { text: 'function build() {', color: '#3b82f6' },
      { text: 'import React from', color: '#8b5cf6' },
      { text: 'class Portfolio', color: '#f59e0b' },
      { text: 'async function', color: '#ec4899' },
      { text: 'export default', color: '#06b6d4' },
      { text: 'useEffect(() =>', color: '#14b8a6' },
      { text: 'return <div>', color: '#6366f1' },
    ]

    class CodeSnippet {
      constructor() {
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.3 + 0.1
        this.fontSize = Math.random() * 12 + 10
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.01
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.rotation += this.rotationSpeed

        if (this.x > canvas.width + 100) this.x = -100
        if (this.x < -100) this.x = canvas.width + 100
        if (this.y > canvas.height + 100) this.y = -100
        if (this.y < -100) this.y = canvas.height + 100
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.font = `${this.fontSize}px 'Courier New', monospace`
        ctx.fillStyle = `${this.text.color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(this.text.text, 0, 0)
        ctx.restore()
      }
    }

    // Grid pattern for monitor/terminal effect
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.05)'
      ctx.lineWidth = 1
      const gridSize = 50

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    const snippets = []
    // Reduce code snippets on mobile for better performance
    const snippetCount = window.innerWidth <= 768 ? 8 : 15
    for (let i = 0; i < snippetCount; i++) {
      snippets.push(new CodeSnippet())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw grid
      drawGrid()

      // Draw and update code snippets
      snippets.forEach(snippet => {
        snippet.update()
        snippet.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="developer-background" />
      <div className="scan-line"></div>
    </>
  )
}

export default DeveloperBackground

