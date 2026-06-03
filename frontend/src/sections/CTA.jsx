import React, { useState } from 'react';
import {
  Mail,
  Phone,
  // Globe,
  ExternalLink,
  LinkIcon,
  Send
} from 'lucide-react';
import emailjs from '@emailjs/browser';

import './CTA.css';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const EMAILJS_SERVICE_ID = 'service_09z44wz';
  const EMAILJS_TEMPLATE_ID = 'template_e7dqknm';
  const EMAILJS_PUBLIC_KEY = 'wkqj8O7W2q3M8h37j';

  const contacts = [
    {
      Icon: Mail,
      value: 'maxwelltechconnect@gmail.com',
      label: 'EMAIL'
    },

    {
      Icon: Phone,
      value: '+63 916 706 0932',
      label: 'PHONE'
    },

    // {
    //   Icon: Globe,
    //   value: 'maxwell-tech.com',
    //   label: 'PORTFOLIO'
    // },

    {
      Icon: ExternalLink,
      value: 'github.com/maxwelltech',
      label: 'GITHUB'
    },

    {
      Icon: LinkIcon,
      value: 'linkedin.com/company/maxwelltech',
      label: 'LINKEDIN'
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus({ type: 'success', message: 'Message sent successfully.' });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      });
  };

  return (

    <section className="cta" id="contact">

      <div className="container">

        <div className="cta-wrapper">

          {/* LEFT */}
          <div className="cta-left">

            <div className="cta-label">
              CONTACT
            </div>

            <h2>
              Let’s build something together
            </h2>

            <p className="cta-text">
              We help businesses and organizations create modern digital solutions —
              from reservation systems and management platforms to business analytics,
              cybersecurity, and enterprise software.
            </p>

            <p className="cta-subtext">
              Have a project in mind? Let’s discuss how we can turn your ideas into scalable solutions.
            </p>

            <div className="cta-contact-list">

              {contacts.map((item, i) => (

                <div className="cta-contact-card" key={i}>

                  <div className="contact-icon">
                    <item.Icon size={18} />
                  </div>

                  <div className="contact-value">
                    {item.value}
                  </div>

                  <div className="contact-label">
                    {item.label}
                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="cta-right">

            <div className="cta-note">
              🚀 Prefer a quick message? Fill out the form and we’ll get back to you shortly.
            </div>

            <form className="cta-form" onSubmit={handleSubmit}>

              <div className="cta-form-row">

                <div className="cta-field">
                  <label>Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="cta-field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

              </div>

              <div className="cta-field">
                <label>Your Message</label>

                <textarea
                  rows={6}
                  placeholder="Tell us about your project, system, or business idea..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <button className="cta-submit" type="submit">
                <Send size={18} />
                Send Message
              </button>

              {status && (
                <div className={`cta-status cta-status-${status.type}`}>
                  {status.message}
                </div>
              )}

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}