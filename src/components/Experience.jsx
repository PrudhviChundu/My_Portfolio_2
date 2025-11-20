import { motion } from 'framer-motion'
import { HiCalendar, HiCode } from 'react-icons/hi'

// General Icons
import { FaDatabase, FaDocker } from 'react-icons/fa'
import { DiOracle } from 'react-icons/di'

// DevOps, Cloud & Tools Icons
import {
  SiLinux,
  SiGitlab,
  SiJenkins,
  SiKubernetes,
  SiPython,
  SiAnsible,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiAmazonaws,
  SiMicrosoftazure,
  SiMicrosoftexcel,
} from 'react-icons/si'

import './Experience.css'

const Experience = () => {
  const timelineEvents = [
    // 1️⃣ Data Analyst — Telefonica Spain
    {
      date: 'Dec 2021 - Dec 2022',
      company: 'Netcracker Technologies',
      location: 'Hyderabad, India',
      title: 'Data Analyst - Telefonica Spain - Started Journey',
      type: 'project',
      tech: ['SQL', 'Linux'],
      description: 'Began my professional journey at Netcracker',
      achievements: [
        'Triaged production incidents and performed root cause analysis (RCA) for telecom systems',
        'Debugged complex data validation and integration errors, applying quick fixes to minimize service impact',
        'Coordinated with support, development, and operations teams to resolve production issues under stringent SLAs',
      ],
      icon: (
        <div style={{ display: 'flex', gap: '6px' }}>
          <FaDatabase />
          <SiLinux />
        </div>
      ),
      color: '#1e88e5',
    },

    // 2️⃣ DevOps Engineer — NDO
    {
      date: 'Dec 2022 - Jan 2024',
      company: 'Netcracker Technologies - Automations',
      location: 'Hyderabad, India',
      title: 'DevOps Engineer - Network Domain Orchestration (NDO)',
      type: 'project',
      tech: [
        'GitLab',
        'Jenkins',
        'Docker',
        'Kubernetes',
        'Python',
        'Shell',
        'Ansible',
        'Terraform',
        'Linux',
        'Prometheus',
        'Grafana',
        'AWS',
        'Azure',
      ],
      description: 'Cloud-native microservices-based orchestration platform',
      achievements: [
        'Managed EKS and AKS clusters ensuring 99.9% uptime using HPA and resource optimization',
        'Automated deployment of 50+ microservices using Helm and YAML configurations',
        'Provisioned consistent cloud infra using Terraform modules',
        'Designed GitLab CI/CD pipelines covering build → test → scan → deploy',
        'Automated validation, log processing, and health checks using Python & Shell scripts',
      ],
      icon: (
        <div style={{ display: 'flex', gap: '6px' }}>
          <SiKubernetes />
          <FaDocker />
          <SiLinux />
        </div>
      ),
      color: '#0d47a1',
    },

    // 3️⃣ SQL Developer — COGECO
    {
      date: 'Jan 2024 - Jan 2025 (50%)',
      company: 'Netcracker Technologies',
      location: 'Hyderabad, India',
      title: 'SQL Developer - COGECO',
      type: 'project',
      tech: ['Linux', 'Excel', 'SQL', 'PL/SQL', 'Shell'],
      description:
        'Managed millions of telecom customer records across RBM and TOMS billing systems',
      achievements: [
        'Developed optimized PL/SQL procedures, functions, and triggers for automated billing workflows',
        'Created invoice automation scripts reducing manual workload by 60%',
        'Implemented reconciliation jobs ensuring billing accuracy between RBM and TOMS',
        'Automated reporting using cron and SQL extract jobs',
        'Applied production hotfixes with zero downtime',
      ],
      icon: (
        <div style={{ display: 'flex', gap: '6px' }}>
          <SiMicrosoftexcel />
          <FaDatabase />
          <SiLinux />
        </div>
      ),
      color: '#2e7d32',
    },

    // 4️⃣ DevOps Engineer (50%) — NDO
    {
      date: 'Jan 2024 - Jan 2025 (50%)',
      company: 'Netcracker Technologies - Automations',
      location: 'Hyderabad, India',
      title: 'DevOps Engineer - Network Domain Orchestration (NDO)',
      type: 'project',
      tech: [
        'GitLab',
        'Jenkins',
        'Docker',
        'Kubernetes',
        'Python',
        'Shell',
        'Ansible',
        'Terraform',
        'Linux',
        'Prometheus',
        'Grafana',
        'AWS',
        'Azure',
      ],
      description: 'Cloud-native orchestration & automation platform',
      achievements: [
        'Worked on microservice deployments, YAML enhancements and cluster upgrades',
        'Developed and optimized Helm templates for environment consistency',
        'Built 40% faster deployment validation scripts using Python & Shell',
      ],
      icon: (
        <div style={{ display: 'flex', gap: '6px' }}>
          <SiKubernetes />
          <FaDocker />
          <SiLinux />
        </div>
      ),
      color: '#01579b',
    },

    // 5️⃣ DevOps Engineer — Present
    {
      date: 'Jan 2025 - Present',
      company: 'Netcracker Technologies - Automations',
      location: 'Hyderabad, India',
      title: 'DevOps Engineer - Network Domain Orchestration (NDO)',
      type: 'project',
      tech: [
        'GitLab',
        'Jenkins',
        'Docker',
        'Kubernetes',
        'Python',
        'Shell',
        'Ansible',
        'Terraform',
        'Linux',
        'Prometheus',
        'Grafana',
        'AWS',
        'Azure',
      ],
      description: 'End-to-end CI/CD, infra automation & Kubernetes operations',
      achievements: [
        'Maintaining high-availability EKS/AKS clusters with security best practices',
        'Terraform-based provisioning improving infra reliability',
        'Managing pipelines for multi-service deployments across environments',
      ],
      icon: (
        <div style={{ display: 'flex', gap: '6px' }}>
          <SiKubernetes />
          <FaDocker />
          <SiLinux />
        </div>
      ),
      color: '#0d47a1',
    },
  ]

  const iconMap = {
    SQL: <FaDatabase />,
    Linux: <SiLinux />,
    Docker: <FaDocker />,
    Kubernetes: <SiKubernetes />,
    GitLab: <SiGitlab />,
    Jenkins: <SiJenkins />,
    Python: <SiPython />,
    Shell: <SiLinux />,
    Ansible: <SiAnsible />,
    Terraform: <SiTerraform />,
    Prometheus: <SiPrometheus />,
    Grafana: <SiGrafana />,
    AWS: <SiAmazonaws />,
    Azure: <SiMicrosoftazure />,
    Excel: <SiMicrosoftexcel />,
    'PL/SQL': <DiOracle />,
  }

  const getTechIcons = (tech) => tech.map((t) => iconMap[t] || <HiCode />)

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

                    <h3 className="exp-title">{event.title}</h3>
                    <h4 className="exp-company">{event.company}</h4>
                    <p className="exp-description">{event.description}</p>

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
