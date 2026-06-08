import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="navbar-container">
        <div className="nav-panel">

          <a href="#home" className="nav-logo">
            <div className="logo-icon">
              <img src="/logo.png" alt="Maxwell Tech Logo" />
            </div>
            <span>Maxwell Tech.</span>
          </a>

          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Start a Project</a>
          </nav>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>
    </header>
  )
}