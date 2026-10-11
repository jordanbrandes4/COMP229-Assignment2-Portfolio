import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Education from './Pages/Education'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h2>JB</h2>

        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact Me</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

<footer>
  <p>© 2026 Jordan Brandes | Portfolio</p>
</footer>

    </BrowserRouter>
  )
}

export default App