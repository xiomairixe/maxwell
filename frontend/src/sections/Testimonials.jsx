import React from 'react';
import { Star } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Testimonials.css';

const testimonials = [
  
];

const stats = [

];

export default function Testimonials() {
  useScrollReveal();

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-label">CLIENT REVIEWS</div>
        <h2 className="section-title">Trusted by Innovators</h2>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div
              className="testimonial-card reveal-card"
              key={i}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="stars">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <blockquote>"{t.quote}"</blockquote>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ background: t.color + '20', color: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="stats-bar">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
