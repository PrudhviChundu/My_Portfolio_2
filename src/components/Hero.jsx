import { motion } from 'framer-motion'
import { HiMail, HiPhone } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import TypingAnimation from './TypingAnimation'
import GlitchEffect from './GlitchEffect'
import MagneticButton from './MagneticButton'
import ScrollSpinImage from './ScrollSpinImage'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span>👋 Welcome to my Portfolio</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Hi, I'm Prudhvi{' '}
            <GlitchEffect text="Prudhvi Chundu" className="gradient-text" />
            <br />
            <TypingAnimation 
              texts={[
                'DevOps Engineer',
                'Cloud Engineer',
                'Kubernetes Admin',
                'Site Reliability Engineer',
                'Automation Expert'
              ]} 
              speed={100}
            />
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Building scalable and dynamic applications with passion.
            <br />
            DevOps Engineer specializing in Automating, managing containerized deployments (Docker, Kubernetes) and cloud infrastructure.
          </motion.p>

          <motion.div className="hero-info" variants={itemVariants}>
            <div className="info-item">
              <HiMail className="info-icon" />
              <span>cpvr1221@gmail.com</span>
            </div>
            <div className="info-item">
              <HiPhone className="info-icon" />
              <span>+91 8143574358</span>
            </div>
            <div className="info-item">
              <span>📍 Rajampet, Andhra Pradesh, India, 516126</span>
            </div>
          </motion.div>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <MagneticButton
              as="a"
              href="#contact"
              className="btn btn-primary"
            >
              Get In Touch
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#experience"
              className="btn btn-secondary"
            >
              View My Journey
            </MagneticButton>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <motion.a
              href="https://github.com/PrudhviChundu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/prudhvi-chundu/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="profile-image-container">
            <ScrollSpinImage />
            <div className="floating-card">
              <div className="card-content">
                <div className="code-snippet">
                  <div className="code-line">
                    <span className="code-keyword">const</span>{' '}
                    <span className="code-variable">DevOps</span> = {'{'}
                  </div>
                  <div className="code-line indent">
                    <span className="code-property">name</span>:{' '}
                    <span className="code-string">'Prudhvi Chundu'</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="code-property">experience</span>:{' '}
                    <span className="code-number">4</span> years,
                  </div>
                  <div className="code-line indent">
                    <span className="code-property">passion</span>:{' '}
                    <span className="code-string">'DevOps Engineer'</span>
                  </div>
                  <div className="code-line">{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  )
}

export default Hero
