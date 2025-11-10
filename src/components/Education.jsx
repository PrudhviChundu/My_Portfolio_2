import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: 'B.TECH | Mechanical Engineering',
      institution: 'Centurion University of Technology and Management',
      location: 'Paralakhemundi, Odisha',
      period: '01/2021',
      gpa: 'GPA: 8.79',
    },
    {
      degree: 'INTERMEDIATE | M P C',
      institution: 'Gayatri jr. college, munasubpeta',
      location: 'Srikakulam, Andhra Pradesh',
      period: '01/2017',
      gpa: 'GPA: 95%',
      board: 'Board of Intermediate Education Andhra Pradesh (APBIE)',
    },
    {
      degree: '10TH (MATRIC)',
      institution: 'M S P S A High School',
      location: 'Rishra, Kolkata',
      period: '01/2015',
      gpa: 'GPA: 63%',
    },
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            <span className="title-number">04.</span> Education
          </h2>
        </motion.div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="edu-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="edu-icon">
                <HiAcademicCap />
              </div>
              <div className="edu-content">
                <h3 className="edu-degree">{edu.degree}</h3>
                <h4 className="edu-institution">{edu.institution}</h4>
                <p className="edu-location">{edu.location}</p>
                {edu.board && <p className="edu-board">{edu.board}</p>}
                <div className="edu-footer">
                  <span className="edu-period">{edu.period}</span>
                  <span className="edu-gpa">{edu.gpa}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

