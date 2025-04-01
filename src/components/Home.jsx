import { Link } from 'react-router-dom'
import bgGif from '../assets/bg.gif'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import '../styles/Home.css'

const Home = () => {
  // Add state to track when animation should run
  const [shouldAnimate, setShouldAnimate] = useState(false)

  // Use inView with a lower threshold
  const { ref: statRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // When stats come into view, trigger animation
  useEffect(() => {
    if (inView) {
      setShouldAnimate(true)
    }
  }, [inView])

  const features = [
    {
      icon: '🛡️',
      title: 'Threat Detection',
      description:
        'Learn to identify and respond to emerging cyber threats in real-time.',
    },
    {
      icon: '🔒',
      title: 'Secure Practices',
      description:
        'Master the latest security protocols and best practices for digital safety.',
    },
    {
      icon: '🔍',
      title: 'Risk Assessment',
      description:
        'Evaluate and mitigate potential security risks in your digital environment.',
    },
    {
      icon: '🚨',
      title: 'Incident Response',
      description:
        'Develop effective strategies for handling cybersecurity incidents.',
    },
  ]

  const latestThreats = [
    {
      type: 'Ransomware',
      severity: 'High',
      description: 'New variant targeting healthcare systems',
      timestamp: '2 hours ago',
    },
    {
      type: 'Phishing',
      severity: 'Medium',
      description: 'Sophisticated campaign targeting financial institutions',
      timestamp: '5 hours ago',
    },
    {
      type: 'DDoS',
      severity: 'Low',
      description: 'Increased activity in European region',
      timestamp: '8 hours ago',
    },
  ]

  return (
    <div className='home-container'>
      <div className='cyber-grid'></div>
      <section className='hero-section'>
        <div className='hero-content'>
          <div className='hero-left'>
            <h1 className='hero-title'>
              Deceit
              <br />
              Defused
            </h1>
            <p className='hero-subtitle'>
              Your comprehensive resource for advanced cybersecurity knowledge
              and digital safety protocols. Stay ahead of emerging threats with
              expert guidance and real-time updates.
            </p>
            <div className='hero-buttons'>
              <Link to='/guide' className='cta-button primary'>
                Access Security Protocols
              </Link>
              <Link to='/tools' className='cta-button secondary'>
                Security Tools
              </Link>
            </div>
          </div>
          <div className='hero-right'>
            <div className='gif-container'>
              <img src={bgGif} alt='Cybersecurity Animation' />
            </div>
          </div>
        </div>
      </section>

      {/* Make sure this is outside the hero-section */}
      <div className='hero-stats' ref={statRef}>
        <div className='stat-item'>
          <span className='stat-number'>
            {shouldAnimate ? (
              <>
                <CountUp start={0} end={24} duration={2} />
                /
                <CountUp start={0} end={7} duration={2} />
              </>
            ) : (
              '0/0'
            )}
          </span>
          <span className='stat-label'>Threat Monitoring</span>
        </div>
        <div className='stat-item'>
          <span className='stat-number'>
            {shouldAnimate ? (
              <>
                <CountUp start={0} end={100} duration={2} />+
              </>
            ) : (
              '0+'
            )}
          </span>
          <span className='stat-label'>Security Protocols</span>
        </div>
        <div className='stat-item'>
          <span className='stat-number'>
            {shouldAnimate ? (
              <>
                <CountUp start={0} end={50} duration={2} />
                K+
              </>
            ) : (
              '0K+'
            )}
          </span>
          <span className='stat-label'>Protected Users</span>
        </div>
      </div>

      <section className='threat-feed'>
        <h2>Live Threat Feed</h2>
        <div className='threat-grid'>
          {latestThreats.map((threat, index) => (
            <div
              key={index}
              className={`threat-card ${threat.severity.toLowerCase()}`}
            >
              <div className='threat-header'>
                <span className='threat-type'>{threat.type}</span>
                <span className='threat-severity'>{threat.severity}</span>
              </div>
              <p className='threat-description'>{threat.description}</p>
              <span className='threat-timestamp'>{threat.timestamp}</span>
            </div>
          ))}
        </div>
      </section>

      <section className='features-section'>
        <h2>Core Capabilities</h2>
        <div className='features-grid'>
          {features.map((feature, index) => (
            <div key={index} className='feature-card'>
              <div className='feature-icon'>{feature.icon}</div>
              <h3 className='feature-title'>{feature.title}</h3>
              <p className='feature-description'>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='resources-section'>
        <h2>Security Resources</h2>
        <div className='resources-grid'>
          <div className='resource-card'>
            <h3>Learning Center</h3>
            <ul>
              <li>Security Tutorials</li>
              <li>Best Practices</li>
              <li>Case Studies</li>
              <li>Certification Paths</li>
            </ul>
            <Link to='/guide' className='resource-link'>
              Start Learning →
            </Link>
          </div>
          <div className='resource-card'>
            <h3>Community</h3>
            <ul>
              <li>Security Forums</li>
              <li>Expert Q&A</li>
              <li>Security Events</li>
              <li>News & Updates</li>
            </ul>
            <Link to='/community' className='resource-link'>
              Join Community →
            </Link>
          </div>
        </div>
      </section>

      <section className='cta-section'>
        <div className='cta-content'>
          <h2>Ready to Enhance Your Digital Security?</h2>
          <p>
            Join thousands of professionals and organizations already protecting
            their digital assets.
          </p>
          <Link to='/register' className='cta-button primary'>
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
