import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            <span className="title-number">01.</span> About Me
          </h2>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <div className="glass-card">
              <h3>Objective</h3>
              <p>
                DevOps Engineer with experience in automating CI/CD pipelines, managing containerized
                deployments (Docker, Kubernetes), and building multi-cloud infrastructure (AWS & Azure)
                using Terraform and Ansible. Proficient in Python scripting, monitoring (Prometheus, Grafana),
                and infrastructure automation to drive high availability, scalability, and efficiency
                across production systems. Recognized for introducing automation frameworks that reduced
                manual efforts, improved deployment frequency, and enhanced overall system reliability.
              </p>
            </div>
          </motion.div>

          <motion.div className="about-stats" variants={itemVariants}>
            <div className="stat-card">
              <div className="stat-number">4</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Dedication</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

