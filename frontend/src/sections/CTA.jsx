import React from 'react';
import {
  Mail,
  Phone,
  Globe,
  ExternalLink,
  LinkIcon,
  Send
} from 'lucide-react';

import './CTA.css';

export default function CTA() {

  const contacts = [
    {
      Icon: Mail,
      value: 'hello@maxwelltech.com',
      label: 'EMAIL'
    },

    {
      Icon: Phone,
      value: '+63 912 345 6789',
      label: 'PHONE'
    },

    {
      Icon: Globe,
      value: 'maxwelltech.com',
      label: 'PORTFOLIO'
    },

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

            <form className="cta-form">

              <div className="cta-form-row">

                <div className="cta-field">
                  <label>Your Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>

                <div className="cta-field">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>

              </div>

              <div className="cta-field">
                <label>Your Message</label>

                <textarea
                  rows={6}
                  placeholder="Tell us about your project, system, or business idea..."
                ></textarea>
              </div>

              <button className="cta-submit">

                <Send size={18} />

                Send Message

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}