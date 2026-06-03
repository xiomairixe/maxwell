import React from 'react';
import { Code2, Cpu, Palette, Shield, Cloud } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Services.css';

const services = [
  {
    icon: <Code2 />,
    title: 'Web Development',
    desc: 'High-performance, responsive websites and web applications built with modern frameworks.',
  },
  {
    icon: <Cpu />,
    title: 'Custom Software',
    desc: 'Tailored software solutions designed to streamline your unique business operations.',
  },
  {
    icon: <Palette />,
    title: 'UI/UX Design',
    desc: 'Intuitive, engaging, and beautiful User Interfaces that delight your customers.',
  },
  {
    icon: <Shield />,
    title: 'IT Security Solutions',
    desc: 'Security assestment to secure digital infrastructure and protect your data.',
  },
  {
    icon: <Cloud />,
    title: 'Cloud & Digital Transformation',
    desc: 'Seamless migration and scalable cloud architectures for the modern enterprise.',
  },
];

export default function Services() {
  useScrollReveal();

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-label">TRUSTED SERVICES</div>
        <h2 className="section-title">Comprehensive Tech Solutions</h2>
        <p className="section-sub">
          We provide end-to-end digital services to help your business scale, secure its assets,
          and stand out in the market.
        </p>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card reveal-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="card-corner"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
