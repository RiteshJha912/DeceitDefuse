import { useState } from 'react'
import {
  FaShieldAlt,
  FaExclamationTriangle,
  FaBook,
  FaClipboardList,
  FaGraduationCap,
  FaBullseye,
  FaSync,
  FaLightbulb,
} from 'react-icons/fa'
import '../styles/SecurityAcademy.css'
import cyberBasics from '../assets/cyber-basics.jpg'
import cyberThreats from '../assets/cyber-threats.jpg'
import cyberProtection from '../assets/cyber-protection.jpg'
import cyberPractices from '../assets/cyber-practices.png'

const SecurityAcademy = () => {
  const [activeSection, setActiveSection] = useState('basics')

  console.log('Active section:', activeSection) // Debug log

  const sections = [
    {
      id: 'basics',
      title: 'Cybersecurity Basics',
      icon: <FaShieldAlt />,
      description: 'Essential concepts and terminology',
      content: {
        overview:
          'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.',
        keyPoints: [
          'Understanding digital threats',
          'Basic security principles',
          'Common vulnerabilities',
          'Protection methods',
        ],
        image: cyberBasics,
      },
    },
    {
      id: 'threats',
      title: 'Common Threats',
      icon: <FaExclamationTriangle />,
      description: 'Understanding digital dangers',
      content: {
        overview:
          'Learn about the most common cyber threats and how to identify them.',
        keyPoints: [
          'Malware and viruses',
          'Phishing attacks',
          'Social engineering',
          'Ransomware',
          'DDoS attacks',
        ],
        image: cyberThreats,
      },
    },
    {
      id: 'protection',
      title: 'Protection Methods',
      icon: <FaShieldAlt />,
      description: 'Defense strategies and tools',
      content: {
        overview:
          'Discover effective ways to protect yourself and your systems.',
        keyPoints: [
          'Password security',
          'Two-factor authentication',
          'Firewalls and antivirus',
          'Regular updates',
          'Backup strategies',
        ],
        image: cyberProtection,
      },
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      icon: <FaClipboardList />,
      description: 'Security guidelines and standards',
      content: {
        overview:
          'Follow these best practices to maintain strong cybersecurity.',
        keyPoints: [
          'Regular security audits',
          'Employee training',
          'Incident response plans',
          'Data encryption',
          'Access control',
        ],
        image: cyberPractices,
      },
    },
  ]

  if (!sections || sections.length === 0) {
    return <div>No sections available</div> // Fallback UI
  }

  return (
    <div className='academy-container'>
      <div className='academy-hero'>
        <h1>Cybersecurity Knowledge Hub</h1>
        <p>
          Your comprehensive guide to understanding and implementing
          cybersecurity
        </p>
      </div>

      <div className='academy-content'>
        <div className='section-selector'>
          {sections.map((section) => (
            <button
              key={section.id}
              className={`section-btn ${
                activeSection === section.id ? 'active' : ''
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              <span className='section-icon'>{section.icon}</span>
              <div className='section-info'>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className='section-content'>
          {sections.map((section) => (
            <div
              key={section.id}
              className={`content-section ${
                activeSection === section.id ? 'active' : ''
              }`}
            >
              <div className='content-header'>
                <h2>{section.title}</h2>
                <p className='overview'>{section.content.overview}</p>
              </div>

              <div className='content-grid'>
                <div className='content-image'>
                  <img src={section.content.image} alt={section.title} />
                  <div className='image-overlay'></div>
                </div>

                <div className='content-details'>
                  <h3>Key Points</h3>
                  <ul className='key-points'>
                    {section.content.keyPoints.map((point, index) => (
                      <li key={index}>
                        <span className='point-icon'>•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className='interactive-elements'>
                <div className='quick-tips'>
                  <h3>Quick Tips</h3>
                  <div className='tips-grid'>
                    {section.content.keyPoints.slice(0, 3).map((tip, index) => (
                      <div key={index} className='tip-card'>
                        <span className='tip-number'>{index + 1}</span>
                        <p>{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='resources'>
                  <h3>Additional Resources</h3>
                  <div className='resource-links'>
                    <a href='#' className='resource-link'>
                      Detailed Guide
                    </a>
                    <a href='#' className='resource-link'>
                      Video Tutorial
                    </a>
                    <a href='#' className='resource-link'>
                      Infographic
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='academy-features'>
        <div className='feature'>
          <div className='feature-icon'>
            <FaGraduationCap />
          </div>
          <h3>Comprehensive Learning</h3>
          <p>From basics to advanced concepts, everything you need to know</p>
        </div>
        <div className='feature'>
          <div className='feature-icon'>
            <FaBullseye />
          </div>
          <h3>Practical Examples</h3>
          <p>Real-world scenarios and case studies</p>
        </div>
        <div className='feature'>
          <div className='feature-icon'>
            <FaSync />
          </div>
          <h3>Regular Updates</h3>
          <p>Stay current with the latest security trends</p>
        </div>
        <div className='feature'>
          <div className='feature-icon'>
            <FaLightbulb />
          </div>
          <h3>Interactive Elements</h3>
          <p>Engage with visual content and practical examples</p>
        </div>
      </div>
    </div>
  )
}

export default SecurityAcademy
