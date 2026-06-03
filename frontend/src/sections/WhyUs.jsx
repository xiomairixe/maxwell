import React from 'react';
import { Users, MessageCircle, Zap, TrendingUp } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import './WhyUs.css';

const reasons = [
  {
    icon: <Users size={22} />,
    title: 'Experienced Professionals',
    desc: 'A dedicated team of senior developers, designers, and strategists.',
  },
  {
    icon: <MessageCircle size={22} />,
    title: 'Transparent Communication',
    desc: 'Clear updates, honest timelines, and collaborative project management.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Fast Project Delivery',
    desc: 'Agile methodologies ensuring rapid deployment without compromising quality.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Scalable Solutions',
    desc: 'Architecture designed to grow seamlessly alongside your business.',
  },
];

export default function WhyUs() {
  useScrollReveal();

  return (
    <section className="whyus">
      <div className="container whyus-inner">
        <div className="whyus-left">
          <div className="section-label">WHY CHOOSE US</div>
          <h2 className="whyus-title">The freelance team you can actually trust.</h2>
          <p>
            We combine the agility of freelancers with the reliability and polish of a top-tier agency.
            Your success is our reputation.
          </p>
        </div>

        <div className="whyus-grid">
          {reasons.map((r, i) => (
            <div
              className="reason-card reveal-card"
              key={i}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="reason-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
