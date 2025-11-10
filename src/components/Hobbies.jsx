import { motion } from 'framer-motion'
import { FaMusic, FaGuitar, FaPlane, FaFutbol } from 'react-icons/fa'
import './Hobbies.css'

const Hobbies = () => {
  const hobbies = [
    {
      icon: <FaFutbol />,
      title: 'Outdoor Sports',
      description: 'Playing all types of outdoor games like cricket, football, basketball etc.',
    },
    {
      icon: <FaMusic />,
      title: 'Music',
      description: 'Listening to music',
    },
    {
      icon: <FaGuitar />,
      title: 'Guitar',
      description: 'Learning Guitar',
    },
    {
      icon: <FaPlane />,
      title: 'Travel',
      description: 'Exploring new places',
    },
  ]

  return (
    <section id="hobbies" className="hobbies">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            <span className="title-number">05.</span> Hobbies & Interests
          </h2>
        </motion.div>

        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              className="hobby-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
              <div className="hobby-icon">{hobby.icon}</div>
              <h3 className="hobby-title">{hobby.title}</h3>
              <p className="hobby-description">{hobby.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="personal-info"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="info-title">Personal Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Father's Name:</span>
              <span className="info-value">Chundu Narayan</span>
            </div>
            <div className="info-item">
              <span className="info-label">Mother's Name:</span>
              <span className="info-value">Chundu Lakshmi Devi</span>
            </div>
            <div className="info-item">
              <span className="info-label">Blood Group:</span>
              <span className="info-value">B+</span>
            </div>
            <div className="info-item">
              <span className="info-label">Date of Birth:</span>
              <span className="info-value">17/01/1997</span>
            </div>
            <div className="info-item">
              <span className="info-label">Nationality:</span>
              <span className="info-value">Indian</span>
            </div>
            <div className="info-item">
              <span className="info-label">Marital Status:</span>
              <span className="info-value">Married</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hobbies

