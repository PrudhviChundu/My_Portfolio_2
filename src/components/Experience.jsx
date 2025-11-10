import { motion } from 'framer-motion'
import { HiCalendar, HiLocationMarker, HiCode, HiLightBulb } from 'react-icons/hi'
import { FaJava, FaReact, FaAngular, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiSpringboot, SiMongodb, SiElasticsearch, SiNodedotjs } from 'react-icons/si'
import './Experience.css'

const Experience = () => {
  const timelineEvents = [
    {
      date: 'Dec 2021 - dec 2022',
      company: 'Netcracker Technologies',
      location: 'Hyderabad, India',
      title: 'Data Analyst  -  Telefonica Spain  -  Started Journey',
      type: 'project',
      tech: ['SQL', 'Linux'],
      description: 'Began my professional journey at Netcracker',
      achievements: [
        'Triaged production incidents and performed root cause analysis (RCA) for telecom systems',
        'Debugged complex data validation and integration errors, applying quick fixes to minimize service impact',
        'Coordinated with support, development, and operations teams to resolve production issues under stringent SLAs',
      ],
      icon: <FaJava />,
      color: '#f89820',
    },
    {
      date: 'Dec 2022 - Jan 2024',
      company: 'Netcracker technologies - Automations',
      location: 'Hyderabad, India',
      title: 'DevOps Engineer  -  Network Domain Orchestration (NDO)',
      type: 'project',
      tech: ['Gitlab', 'Jenkins', 'CI/CD', 'Docker & Kubernetes', 'Python & Shell', 'Yaml/Ansible','Terraform', 'Linux', 'Monitoring & Logging', 'AWS & Azure'],
      description: 'cloud-native microservices-based orchestration platform',
      achievements: [
        'Kubernetes Management: Managed large-scale EKS and AKS clusters, improving uptime to 99.9% using horizontal pod autoscaling (HPA), node taints/tolerations, and resource optimization',
        'Microservices Deployment Automation: Designed Helm-based Kubernetes manifests (YAML) to deploy over 50+ microservices, reducing configuration drift and maintaining environment consistency.',
        'Infrastructure as Code (IaC): Automated provisioning of network, compute, and storage resources using Terraform modules, enabling repeatable, version-controlled deployments',
        'GitLab CI/CD Pipelines: build, test, scan, deploy',
        'Automation using Python & Shell: Built scripts for deployment validation, log parsing, backup automation, and post-deployment health checks, reducing manual verification efforts by 40%',
      ],
      icon: <SiMongodb />,
      color: '#dd0031',
    },

    {
      date: 'jan 2024 - Jan 2025 (50%)',
      company: 'Netcracker Technologies',
      location: 'Hyderabad, India',
      title: 'SQL Developer  -  COGECO',
      type: 'project',
      tech: ['Linux', 'Excel', 'SQL', 'PL/SQL', 'Shell Scripting'],
      description: 'managing millions of customer records across RBM (Rating & Billing Manager) and TOMS (Telecom Operations Management System) databases',
      achievements: [
        'Wrote optimized PL/SQL procedures, functions, and triggers for automated billing, usage rating, and validation',
        'Implemented billing automation scripts to generate monthly invoices, reducing manual workload by 60%',
        'Created data reconciliation jobs between RBM and TOMS systems to ensure billing accuracy and eliminate mismatches',
        'Automated data extraction and report generation through SQL Agent and cron jobs, improving report delivery timelines',
        'Applied hotfix patches in production environments with zero downtime, ensuring uninterrupted customer billing operations',
        'Continuously learning and implementing new technologies',
      ],
      icon: <FaDatabase />,
      color: '#6db33f',
    },
    {
      date: 'Jan 2024 - Jan 2025 (50%)',
      company: 'Netcracker technologies - Automations',
      location: 'Hyderabad, India',
      title: 'DevOps Engineer  -  Network Domain Orchestration (NDO)',
      type: 'project',
      tech: ['Gitlab', 'Jenkins', 'CI/CD', 'Docker & Kubernetes', 'Python & Shell', 'Yaml/Ansible','Terraform', 'Linux', 'Monitoring & Logging', 'AWS & Azure'],
      description: 'cloud-native microservices-based orchestration platform',
      achievements: [
        'Kubernetes Management: Managed large-scale EKS and AKS clusters, improving uptime to 99.9% using horizontal pod autoscaling (HPA), node taints/tolerations, and resource optimization',
        'Microservices Deployment Automation: Designed Helm-based Kubernetes manifests (YAML) to deploy over 50+ microservices, reducing configuration drift and maintaining environment consistency.',
        'Infrastructure as Code (IaC): Automated provisioning of network, compute, and storage resources using Terraform modules, enabling repeatable, version-controlled deployments',
        'GitLab CI/CD Pipelines: build, test, scan, deploy',
        'Automation using Python & Shell: Built scripts for deployment validation, log parsing, backup automation, and post-deployment health checks, reducing manual verification efforts by 40%',
      ],
      icon: <SiMongodb />,
      color: '#dd0031',
    },
    {
      date: 'Jan 2025 - Present',
      company: 'Netcracker technologies - Automations',
      location: 'Hyderabad, India',
      title: 'DevOps Engineer  -  Network Domain Orchestration (NDO)',
      type: 'project',
      tech: ['Gitlab', 'Jenkins', 'CI/CD', 'Docker & Kubernetes', 'Python & Shell', 'Yaml/Ansible','Terraform', 'Linux', 'Monitoring & Logging', 'AWS & Azure'],
      description: 'cloud-native microservices-based orchestration platform',
      achievements: [
        'Kubernetes Management: Managed large-scale EKS and AKS clusters, improving uptime to 99.9% using horizontal pod autoscaling (HPA), node taints/tolerations, and resource optimization',
        'Microservices Deployment Automation: Designed Helm-based Kubernetes manifests (YAML) to deploy over 50+ microservices, reducing configuration drift and maintaining environment consistency.',
        'Infrastructure as Code (IaC): Automated provisioning of network, compute, and storage resources using Terraform modules, enabling repeatable, version-controlled deployments',
        'GitLab CI/CD Pipelines: build, test, scan, deploy',
        'Automation using Python & Shell: Built scripts for deployment validation, log parsing, backup automation, and post-deployment health checks, reducing manual verification efforts by 40%',
      ],
      icon: <SiMongodb />,
      color: '#dd0031',
    },
  ]

  const getTechIcons = (tech) => {
    const iconMap = {
      'Java': <FaJava />,
      'Spring Boot': <SiSpringboot />,
      'React': <FaReact />,
      'Angular': <FaAngular />,
      'Node.js': <SiNodedotjs />,
      'MongoDB': <SiMongodb />,
      'Elasticsearch': <SiElasticsearch />,
      'SQL': <FaDatabase />,
    }
    return tech.map(t => iconMap[t] || <HiCode />)
  }

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            <span className="title-number">02.</span> Professional Journey
          </h2>
          <p className="section-subtitle">
            My career timeline showcasing growth, learning, and contributions
          </p>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${event.type}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="timeline-marker">
                  <div className="marker-icon" style={{ color: event.color }}>
                    {event.icon}
                  </div>
                  <div className="marker-pulse" style={{ borderColor: event.color }}></div>
                </div>
                <div className="timeline-content">
                  <div className="exp-card">
                    <div className="exp-date-badge">
                      <HiCalendar className="date-icon" />
                      <span>{event.date}</span>
                    </div>
                    <div className="exp-header">
                      <div>
                        <h3 className="exp-title">{event.title}</h3>
                        <h4 className="exp-company">{event.company}</h4>
                        <p className="exp-description">{event.description}</p>
                      </div>
                    </div>
                    <div className="exp-tech-stack">
                      <span className="tech-label">Tech Stack:</span>
                      <div className="tech-icons">
                        {getTechIcons(event.tech).map((icon, idx) => (
                          <span key={idx} className="tech-icon" title={event.tech[idx]}>
                            {icon}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ul className="exp-achievements">
                      {event.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 + idx * 0.05 }}
                        >
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
