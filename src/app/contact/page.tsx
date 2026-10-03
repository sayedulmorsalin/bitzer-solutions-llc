'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, MapPin, Send, CheckCircle, Smartphone, Globe, Shield } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'custom_app',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
          <div className="badge badge-brand" style={{ marginBottom: '16px' }}>
            <Mail size={16} />
            <span>Corporate Communications</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', marginBottom: '16px' }}>
            Contact <span className="text-gradient">Bitzer Solutions LLC</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Get in touch with our leadership, engineering team, or developer relations department.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'start'
        }}>
          {/* Form */}
          <div className="glass-card" style={{ padding: '36px' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '8px' }}>
              Send Us a Message
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Fill out the details below and we will route your inquiry to the appropriate department.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <CheckCircle size={32} color="#34d399" />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '8px' }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px' }}>
                  Thank you for contacting Bitzer Solutions LLC. We will follow up via <strong>{formData.email}</strong> shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="btn btn-secondary"
                  style={{ fontSize: '0.85rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    id="contact-name"
                    className="form-control"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">
                    Business Email *
                  </label>
                  <input 
                    type="email" 
                    id="contact-email"
                    className="form-control"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-type">
                    Inquiry Type
                  </label>
                  <select 
                    id="contact-type"
                    className="form-control"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    style={{ background: '#0f172a' }}
                  >
                    <option value="custom_app">Custom Mobile App Development</option>
                    <option value="custom_web">Web Application / Platform Engineering</option>
                    <option value="play_store">Google Play Store & Developer Inquiries</option>
                    <option value="privacy">Privacy & Legal Verification</option>
                    <option value="partnership">Business Partnership / Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">
                    Message Details *
                  </label>
                  <textarea 
                    id="contact-message"
                    className="form-control"
                    placeholder="Provide context regarding your project, inquiry, or question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>
                  <Send size={16} /> Submit Corporate Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Details & Departments */}
          <div>
            <div className="glass-card" style={{ padding: '30px', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '20px' }}>
                Corporate Directory
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '0.92rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '4px' }}>General Inquiries</h4>
                  <a href="mailto:support@bitzers.top" style={{ color: 'var(--accent-secondary-light)', textDecoration: 'none' }}>
                    support@bitzers.top
                  </a>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '4px' }}>App End-User Support</h4>
                  <a href="mailto:support@bitzers.top" style={{ color: 'var(--accent-secondary-light)', textDecoration: 'none' }}>
                    support@bitzers.top
                  </a>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '4px' }}>Data Protection & Legal</h4>
                  <a href="mailto:support@bitzers.top" style={{ color: 'var(--accent-primary-light)', textDecoration: 'none' }}>
                    support@bitzers.top
                  </a>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <MapPin size={20} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ color: '#ffffff' }}>Bitzer Solutions LLC</strong>
                      <p style={{ margin: '2px 0 0', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                        Registered Mobile Software & Digital Publishing Entity<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cloudflare Edge note */}
            <div style={{ 
              background: 'rgba(6, 182, 212, 0.06)', 
              border: '1px solid var(--border-cyan)', 
              borderRadius: 'var(--radius-lg)', 
              padding: '24px' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#22d3ee', fontWeight: 600, marginBottom: '8px' }}>
                <Globe size={18} />
                <span>Hosted on Cloudflare Edge</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0, lineHeight: 1.6 }}>
                All Bitzer Solutions LLC services operate across Cloudflare&apos;s global 300+ city edge network with automated SSL/TLS encryption and zero downtime architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
