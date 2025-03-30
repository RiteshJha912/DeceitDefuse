import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SecurityAcademy from './components/SecurityAcademy'
import Quiz from './components/Quiz'
import IncidentReport from './components/IncidentReport'
import News from './components/News'
// import News from './components/News'
import './styles/App.css'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<SecurityAcademy />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/complaint" element={<IncidentReport />} />
            <Route path="/news" element={<News />} />
            {/* <Route path="/news" element={<News />} /> */}
            <Route path="/tools" element={<div>Tools Page</div>} />
            <Route path="/guide" element={<div>Guide Page</div>} />
            {/* Additional routes will be added as we create more components */}
            <Route path="/contact" element={<div>Contact (Coming Soon)</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App 