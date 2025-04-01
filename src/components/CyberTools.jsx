import {
  FaSearch,
  FaKey,
  FaShieldAlt,
  FaLock,
  FaBug,
  FaNetworkWired,
} from 'react-icons/fa'
import '../styles/CyberTools.css'

const tools = [
  {
    id: 'ipLookup',
    title: 'IP Lookup',
    icon: <FaSearch />,
    description: 'Find location and details from an IP address.',
    price: '₹499',
  },
  {
    id: 'passwordStrength',
    title: 'Password Strength Checker',
    icon: <FaKey />,
    description: 'Evaluate the strength of your password.',
    price: '₹299',
  },
  {
    id: 'malwareScanner',
    title: 'Malware Scanner',
    icon: <FaBug />,
    description: 'Scan files or systems for potential malware threats.',
    price: '₹999',
  },
  {
    id: 'networkMonitor',
    title: 'Network Monitor',
    icon: <FaNetworkWired />,
    description: 'Monitor network traffic for suspicious activities.',
    price: '₹799',
  },
  {
    id: 'encryptionTool',
    title: 'Encryption Tool',
    icon: <FaLock />,
    description: 'Encrypt and decrypt sensitive data securely.',
    price: '₹599',
  },
  {
    id: 'firewallAnalyzer',
    title: 'Firewall Analyzer',
    icon: <FaShieldAlt />,
    description: 'Analyze and optimize your firewall settings.',
    price: '₹899',
  },
]

const CyberTools = () => {
  return (
    <div className='cyber-tools-container'>
      <header className='tools-header'>
        <h1>Cybersecurity Tools</h1>
        <p>
          Explore our suite of cybersecurity tools designed to enhance your
          digital safety and protect your online presence.
        </p>
      </header>

      <div className='tools-grid'>
        {tools.map((tool) => (
          <div key={tool.id} className='tool-card'>
            <div className='tool-icon'>{tool.icon}</div>
            <h3 className='tool-title'>{tool.title}</h3>
            <p className='tool-description'>{tool.description}</p>
            <p className='tool-price'>{tool.price}</p>
            <button className='tool-btn'>Learn More</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CyberTools
