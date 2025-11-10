import './WaveAnimation.css'

const WaveAnimation = () => {
  return (
    <div className="wave-container">
      <svg
        className="wave-svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          className="wave-path"
          d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
          fill="rgba(59, 130, 246, 0.1)"
        />
        <path
          className="wave-path wave-path-2"
          d="M0,80 Q300,40 600,80 T1200,80 L1200,120 L0,120 Z"
          fill="rgba(16, 185, 129, 0.1)"
        />
        <path
          className="wave-path wave-path-3"
          d="M0,100 Q300,60 600,100 T1200,100 L1200,120 L0,120 Z"
          fill="rgba(139, 92, 246, 0.1)"
        />
      </svg>
    </div>
  )
}

export default WaveAnimation

