import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h3>DeceitDefused</h3>
          <p>
            Your trusted partner in cybersecurity education and digital safety,
            based in Mumbai.
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
            <li>Phone: +91 98190 12345</li>
            <li>
              Address: 504 Tech Heights, Andheri East, Mumbai, Maharashtra,
              India - 400059
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>
          &copy; {new Date().getFullYear()} DeceitDefused. All rights reserved.
        </p>
        <p>Designed and Developed with ❤️ by Ritesh</p>
      </div>
    </footer>
  )
}

export default Footer
