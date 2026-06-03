import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Portfolio.css';

const projects = [
  {
    tag: 'Facilities Reservation System',
    title: 'Facilities Reservation Management',
    desc: 'A smart reservation platform for managing facility bookings, schedules, approvals, and slot availability.',
    color: '#6C3EF6',
    bg: 'linear-gradient(135deg, #0f0f2a, #1a1a4e)',
    accent: '#22D3EE',
    images: ['/ViaHale/Login.png', '/ViaHale/End_Users_Landing_Page.png', '/Viahale/Requests.png',],
  },

  {
    tag: 'Security & Monitoring',
    title: 'Visitor Management System',
    desc: 'QR-powered visitor registration and monitoring solution with real-time check-in and approval workflows.',
    color: '#22D3EE',
    bg: 'linear-gradient(135deg, #0a1628, #0d2040)',
    accent: '#6C3EF6',
    images: ['/ViaHale/Admin_Visitors.png', '/ViaHale/Admin_Visitor.png', '/ViaHale/Admin_Visitor_Report.png'],
  },
  {
      tag: 'Business Management',
      title: 'Inventory, Sales, and Cost Management System',
      desc: 'Inventory tracking platform for managing stocks, supplies, product monitoring, and warehouse operations. Business analytics and sales monitoring system with expense tracking, reporting, and financial insights.',
      color: '#EC4899',
      bg: 'linear-gradient(135deg, #2a1020, #3b1230)',
      accent: '#F472B6',
      images: ['/MyStore/Screenshot 2026-05-11 114339.png', '/MyStore/Screenshot 2026-05-11 114347.png', '/MyStore/Screenshot 2026-05-11 114354.png'],
  },
  {
    tag: 'RFID Technology',
    title: 'RFID DTR Attendance Monitoring System',
    desc: 'RFID-based attendance tracking system with automated time logs, monitoring, and reporting features.',
    color: '#F59E0B',
    bg: 'linear-gradient(135deg, #1a1000, #2a1a00)',
    accent: '#FCD34D',
    images: ['/ClockedIn/Main_Interface.png', '/ClockedIn/ESS_Home_Page.png', '/ClockedIn/Attendance.png'],
  },
  {
    tag: 'Document Solution',
    title: 'Document Management',
    desc: 'Centralized document storage system with folder organization, release workflows, and access control.',
    color: '#10B981',
    bg: 'linear-gradient(135deg, #081a14, #0d2a1f)',
    accent: '#34D399',
    images: ['/ViaHale/Admin_Document.png']
  },
];

export default function Portfolio() {
  const [carouselIndex, setCarouselIndex] = useState(Array(projects.length).fill(0));

  useScrollReveal();

  const prevSlide = (projectIndex) => {
    setCarouselIndex((current) =>
      current.map((value, index) =>
        index === projectIndex
          ? (value - 1 + projects[projectIndex].images.length) % projects[projectIndex].images.length
          : value
      )
    );
  };

  const nextSlide = (projectIndex) => {
    setCarouselIndex((current) =>
      current.map((value, index) =>
        index === projectIndex
          ? (value + 1) % projects[projectIndex].images.length
          : value
      )
    );
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-label">PROJECTS SHOWCASE</div>
        <h2 className="section-title">Projects Delivered</h2>
        <p className="section-sub">
          Explore some of our recent work across different industries and technology stacks.
        </p>

        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <div
              className="project-card reveal-card"
              key={i}
              style={{
                '--accent': p.accent,
                animationDelay: `${i * 0.08}s`,
              }}
            >
              <div className="project-visual" style={{ background: p.bg }}>
                <img
                  className="project-image"
                  src={encodeURI(p.images[carouselIndex[i]])}
                  alt={`${p.title} screenshot ${carouselIndex[i] + 1}`}
                />
                {p.images.length > 1 && (
                  <>
                    <button
                      className="project-nav project-nav-prev"
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        prevSlide(i);
                      }}
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    <button
                      className="project-nav project-nav-next"
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        nextSlide(i);
                      }}
                      aria-label="Next image"
                    >
                      ›
                    </button>
                    <div className="project-pagination">
                      {carouselIndex[i] + 1}/{p.images.length}
                    </div>
                  </>
                )}
                <div className="project-tag" style={{ color: p.color, borderColor: p.color + '40', background: p.color + '15' }}>
                  {p.tag}
                </div>
              </div>
              <div className="project-info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href="#contact" className="project-link" style={{ color: p.color }}>
                  View Case Study <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
