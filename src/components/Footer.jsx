import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h3>DeceitDefused</h3>
          <p>
            Your trusted partner in cybersecurity education and digital safety.
          </p>
        </div>
        <div className='footer-section'>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/guide'>Security Guide</Link>
            </li>
            <li>
              <Link to='/quiz'>Security Quiz</Link>
            </li>
            <li>
              <Link to='/complaint'>Register Complaint</Link>
            </li>
          </ul>
        </div>
        <div className='footer-section'>
          <h4>Contact</h4>
          <ul>
            <li>Email: support@deceitdefused.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Cyber Street, Digital City</li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>
          &copy; {new Date().getFullYear()} DeceitDefused. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
