import React from 'react';
import { ArrowRight, Calendar, TrendingUp, CreditCard } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for new projects
          </div>

          <h1 className="hero-title">
            Building Digital Solutions<br />
            That <span className="gradient-text">Drive Results</span>
          </h1>

          <p className="hero-subtitle">
            We are a freelance team specializing in web development, software solutions,
            UI/UX design, IT support, cybersecurity, and digital innovation.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Start a Project <ArrowRight size={16} />
            </a>
            <a href="#services" className="btn-ghost">
              <Calendar size={16} />
              Book a Free Consultation
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="mockup-card mockup-dark">
            <div className="mockup-dots">
              <span></span><span></span><span></span>
            </div>
            <div className="mockup-lines">
              <div className="mock-line w-70 bright"></div>
              <div className="mock-line w-50"></div>
              <div className="mock-line w-85"></div>
              <div className="mock-line w-40"></div>
            </div>
          </div>

          <div className="mockup-card mockup-card-sm mockup-payment">
            <CreditCard size={20} color="#a78bfa" />
            <div>
              <div className="mock-line w-60 bright sm"></div>
              <div className="mock-line w-40 sm" style={{marginTop: 6}}></div>
            </div>
          </div>

          <div className="mockup-card mockup-chart">
            <div className="chart-header">
              <TrendingUp size={14} color="#22d3ee" />
              <span>Revenue</span>
            </div>
            <div className="bar-chart">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div key={i} className="bar" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
