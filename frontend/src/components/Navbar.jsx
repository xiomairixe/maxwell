import React, { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'
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

  const links = [
    'Services',
    'Projects',
  ]

  return (

    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>

      <div className="navbar-container">

        <div className="nav-panel">

          {/* LOGO */}
          <a href="#home" className="nav-logo">

            <div className="logo-icon">
              <Zap size={18} />
            </div>

            <span>Maxwell Tech.</span>

          </a>

          {/* DESKTOP NAV */}
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>

            {links.map(link => (

              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>

            ))}

            <a
              href="#contact"
              className="nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Start a Project
            </a>

          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

      </div>

    </header>
  )
}