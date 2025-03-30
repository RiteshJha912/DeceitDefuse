import { Link } from 'react-router-dom'
import '../styles/Guide.css'

const Guide = () => {
  const guides = [
    {
      id: 'password-security',
      title: 'Password Security',
      description: 'Learn how to create and manage strong passwords effectively.',
      icon: '🔑'
    },
    {
      id: 'phishing-awareness',
      title: 'Phishing Awareness',
      description: 'Identify and avoid common phishing scams and social engineering attacks.',
      icon: '🎣'
    },
    {
      id: 'social-media',
      title: 'Social Media Safety',
      description: 'Protect your privacy and security on social media platforms.',
      icon: '📱'
    },
    {
      id: 'online-shopping',
      title: 'Safe Online Shopping',
      description: 'Best practices for secure online shopping and payment methods.',
      icon: '🛍️'
    },
    {
      id: 'public-wifi',
      title: 'Public WiFi Safety',
      description: 'Stay safe while using public WiFi networks.',
      icon: '📡'
    },
    {
      id: 'data-backup',
      title: 'Data Backup & Recovery',
      description: 'Learn how to backup your data and recover from cyber incidents.',
      icon: '💾'
    }
  ]

  return (
    <div className="guide-container">
      <h1>Digital Safety Guide</h1>
      <p className="guide-intro">
        Welcome to our comprehensive guide on staying safe in the digital world. 
        Select a topic below to learn more about specific aspects of digital security.
      </p>
      
      <div className="guide-grid">
        {guides.map((guide) => (
          <Link to={`/guide/${guide.id}`} key={guide.id} className="guide-card">
            <div className="guide-icon">{guide.icon}</div>
            <h2>{guide.title}</h2>
            <p>{guide.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Guide 