import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import WaveAnimation from './WaveAnimation'
import MagneticButton from './MagneticButton'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <WaveAnimation />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            <span className="title-number">06.</span> Get In Touch
          </h2>
          <p className="section-subtitle">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-card">
              <div className="contact-item">
                <div className="contact-icon">
                  <HiMail />
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <a href="mailto:cpvr1221@gmail.com">cpvr1221@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <HiPhone />
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <a href="tel:+918143574358">+91 8143574358</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <HiLocationMarker />
                </div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>Rajampet, Andhra Pradesh, India, 516126</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaGithub />
                </div>
                <div className="contact-details">
                  <h3>GitHub</h3>
                  <a href="https://github.com/PrudhviChundu" target="_blank" rel="noopener noreferrer">
                    github.com/PrudhviChundu
                  </a>
                </div>
              </div>
            </div>

            <div className="social-links">
              <motion.a
                href="https://github.com/PrudhviChundu"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/PrudhviChundu"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-form-card">
              <h3>Send a Message</h3>
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea rows="5" placeholder="Your Message" required></textarea>
                </div>
                <MagneticButton
                  type="submit"
                  className="submit-btn"
                >
                  Send Message
                </MagneticButton>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>© 2025 Prudhvi Chundu. Built with React & ❤️</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

