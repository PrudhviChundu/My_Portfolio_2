import { motion } from 'framer-motion'
import {
  FaJava,
  FaJs,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaGoogle,
  FaHtml5,
  FaCss3Alt,
  FaNpm,
  FaLinux,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiMongodb,
  SiElasticsearch,
  SiSpringboot,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiJest,
  SiJira,
  SiSlack,
  SiJenkins,
  SiGitlab,
  SiPostman,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiWebpack,
  SiVite,
  SiEslint,
  SiPrettier,
  SiJson,
  SiLinux,
  SiUbuntu,
} from 'react-icons/si'
import { HiCode, HiServer, HiCloud, HiDatabase, HiLockClosed, HiDesktopComputer } from 'react-icons/hi'
import './Skills.css'

const Skills = () => {
  // Icon mapping function
  const getSkillIcon = (skillName) => {
    const iconMap = {
      // Programming Languages
      Java: <FaJava />,
      JavaScript: <FaJs />,
      TypeScript: <SiTypescript />,
      
      // Frontend
      'React.js': <FaReact />,
      React: <FaReact />,
      Angular: <FaAngular />,
      'Backbone.js': <FaJs />,
      'React Flow': <FaReact />,
      HTML5: <FaHtml5 />,
      CSS3: <FaCss3Alt />,
      'Tailwind CSS': <SiTailwindcss />,
      Bootstrap: <SiBootstrap />,
      Redux: <SiRedux />,
      
      // Backend
      'Node.js': <FaNodeJs />,
      Node: <FaNodeJs />,
      'Spring Boot': <SiSpringboot />,
      'REST APIs': <HiCode />,
      REST: <HiCode />,
      SOAP: <HiCode />,
      GraphQL: <SiGraphql />,
      JWT: <HiLockClosed />,
      
      // Databases
      MongoDB: <SiMongodb />,
      Elasticsearch: <SiElasticsearch />,
      SQL: <HiDatabase />,
      PostgreSQL: <SiPostgresql />,
      Redis: <SiRedis />,
      'Elasticsearch Query DSL': <SiElasticsearch />,
      
      // Version Control & DevOps
      Git: <FaGitAlt />,
      GitHub: <FaGithub />,
      GitLab: <SiGitlab />,
      'CI/CD': <SiJenkins />,
      Docker: <FaDocker />,
      Microservices: <HiServer />,
      Jenkins: <SiJenkins />,
      
      // Cloud & Infrastructure
      'Google Cloud Platform': <FaGoogle />,
      GCP: <FaGoogle />,
      AWS: <FaAws />,
      'Cloud Deployment': <HiCloud />,
      'Server Management': <HiServer />,
      Linux: <SiLinux />,
      Ubuntu: <SiUbuntu />,
      
      // Development Tools
      'VS Code': <HiDesktopComputer />,
      'IntelliJ IDEA': <HiDesktopComputer />,
      Postman: <SiPostman />,
      npm: <FaNpm />,
      Maven: <HiCode />,
      Gradle: <HiCode />,
      Webpack: <SiWebpack />,
      Vite: <SiVite />,
      ESLint: <SiEslint />,
      Prettier: <SiPrettier />,
      
      // Testing & Quality
      Jest: <SiJest />,
      'Unit Testing': <SiJest />,
      'Code Review': <HiCode />,
      
      // Project Management
      Jira: <SiJira />,
      Slack: <SiSlack />,
      Agile: <HiCode />,
      Scrum: <HiCode />,
      
      // Data Formats
      JSON: <SiJson />,
      'API Design': <HiCode />,
    }
    
    return iconMap[skillName] || <HiCode />
  }

  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'TypeScript'],
      icon: '💻',
    },
    {
      category: 'Frontend Technologies',
      skills: ['React.js', 'Angular', 'Backbone.js', 'React Flow', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Redux'],
      icon: '🎨',
    },
    {
      category: 'Backend & APIs',
      skills: ['Node.js', 'Spring Boot', 'REST APIs', 'SOAP', 'GraphQL', 'JWT', 'Microservices'],
      icon: '⚙️',
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'Elasticsearch', 'SQL', 'PostgreSQL', 'Redis', 'Elasticsearch Query DSL'],
      icon: '🗄️',
    },
    {
      category: 'Version Control & DevOps',
      skills: ['Git', 'GitHub', 'GitLab', 'CI/CD', 'Docker', 'Jenkins', 'Microservices'],
      icon: '🔧',
    },
    {
      category: 'Cloud & Infrastructure',
      skills: ['Google Cloud Platform', 'AWS', 'Cloud Deployment', 'Server Management', 'Linux', 'Ubuntu'],
      icon: '☁️',
    },
    {
      category: 'Development Tools',
      skills: ['VS Code', 'IntelliJ IDEA', 'Postman', 'npm', 'Maven', 'Gradle', 'Webpack', 'Vite', 'ESLint', 'Prettier'],
      icon: '🛠️',
    },
    {
      category: 'Testing & Quality',
      skills: ['Jest', 'Unit Testing', 'Code Review', 'ESLint', 'Prettier'],
      icon: '✅',
    },
    {
      category: 'Project Management',
      skills: ['Jira', 'Slack', 'Agile', 'Scrum', 'GitHub'],
      icon: '📋',
    },
    {
      category: 'Data Formats & Standards',
      skills: ['JSON', 'REST APIs', 'GraphQL', 'API Design', 'SOAP'],
      icon: '📊',
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            <span className="title-number">03.</span> Skills & Technologies
          </h2>
          <p className="section-subtitle">
            Technologies and tools I use in my daily development workflow
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="skill-card">
                <div className="skill-header">
                  <span className="skill-icon">{category.icon}</span>
                  <h3 className="skill-category-name">{category.category}</h3>
                </div>
                <div className="skill-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <span className="skill-icon-small">{getSkillIcon(skill)}</span>
                      <span className="skill-name">{skill}</span>
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
