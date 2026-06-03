import React from 'react';
import { Zap, Code2, Link, Share2, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="nav-logo footer-logo">
              <span className="logo-icon"><Zap size={16} /></span>
              Maxwell Tech.
            </a>
            <p>A premium freelance technology team building digital solutions that drive real business results.</p>
            <div className="footer-socials">
              <a href="#top"><Code2 size={18} /></a>
              <a href="#top"><Link size={18} /></a>
              <a href="#top"><Share2 size={18} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              {/* <li><a href="#process">Our Process</a></li> */}
              <li><a href="#portfolio">Portfolio</a></li>
              {/* <li><a href="#team">Team</a></li> */}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:maxwelltechconnect@gmail.com">
                  <Mail size={14} />maxwelltechconnect@gmail.com
                </a>
              </li>
              <li>
                <span className="footer-available">
                  <span className="badge-dot"></span>
                  Available for new projects worldwide
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year}  Maxwell Tech. All rights reserved.</span>
          <div className="footer-legal">
            <a href="/privacy-policy.html">Privacy Policy</a>
            <a href="/terms-of-service.html">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
