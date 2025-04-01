import React from 'react' // Add this import
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SecurityAcademy from './components/SecurityAcademy'
import Quiz from './components/Quiz'
import IncidentReport from './components/IncidentReport'
import News from './components/News'
import './styles/App.css'
import Footer from './components/Footer'

function ScrollToTop() {
  const { pathname } = useLocation()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  console.log('App component rendering...') // Debug log

  return (
    <Router>
      <ScrollToTop />
      <div className='app'>
        <Navbar />
        <main className='content-wrapper'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/learn' element={<SecurityAcademy />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/complaint' element={<IncidentReport />} />
            <Route path='/news' element={<News />} />
            <Route path='/guide' element={<div>Guide Page</div>} />
            <Route path='/contact' element={<div>Contact (Coming Soon)</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
