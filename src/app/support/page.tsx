'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, Mail, MessageSquare, CheckCircle, AlertCircle, Smartphone, Clock } from 'lucide-react';

export default function SupportPage() {
  const [appName, setAppName] = useState('novascan');
  const [userEmail, setUserEmail] = useState('');
  const [deviceModel, setDeviceModel] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail || !message) return;
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
          <div className="badge badge-brand" style={{ marginBottom: '16px' }}>
            <HelpCircle size={16} />
            <span>Developer Help Center</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', marginBottom: '16px' }}>
            App User <span className="text-gradient">Support Desk</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Official customer assistance portal for all mobile applications and web services published by <strong>Bitzer Solutions LLC</strong>.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'start'
        }}>
          {/* Support Ticket Form */}
          <div className="glass-card" style={{ padding: '36px' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '8px' }}>
              Submit a Support Ticket
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Need technical help, found a bug, or have feedback? Our engineering team will respond within 24 to 48 hours.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <CheckCircle size={32} color="#34d399" />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '8px' }}>
                  Ticket Received!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px' }}>
                  We have logged your ticket and a member of our mobile support team will reply directly to <strong>{userEmail}</strong>.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="btn btn-secondary"
                  style={{ fontSize: '0.85rem' }}
                >
                  Submit Another Ticket
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="ticket-app">
                    Application *
                  </label>
                  <select 
                    id="ticket-app"
                    className="form-control"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    style={{ background: '#0f172a' }}
                  >
                    <option value="novascan">NovaScan Pro (Android)</option>
                    <option value="pulsetracker">PulseTracker Health (Android)</option>
                    <option value="nexus">Nexus Analytics Web Hub</option>
                    <option value="general">Other / General Technical Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="ticket-email">
                    Your Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="ticket-email"
                    className="form-control"
                    placeholder="you@domain.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="ticket-device">
                    Device Model & OS Version (Optional)
                  </label>
                  <input 
                    type="text" 
                    id="ticket-device"
                    className="form-control"
                    placeholder="e.g. Samsung Galaxy S24 / Android 14"
                    value={deviceModel}
                    onChange={(e) => setDeviceModel(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="ticket-subject">
                    Subject / Issue Summary *
                  </label>
                  <input 
                    type="text" 
                    id="ticket-subject"
                    className="form-control"
                    placeholder="Brief summary of the issue"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="ticket-message">
                    Detailed Description *
                  </label>
                  <textarea 
                    id="ticket-message"
                    className="form-control"
                    placeholder="Please explain what happened, steps to reproduce, or what assistance you need..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>
                  Send Message to Engineering Desk
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Fast FAQ */}
          <div>
            {/* Direct Contact Card */}
            <div className="glass-card" style={{ padding: '30px', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={22} color="var(--accent-secondary-light)" />
                Direct Developer Contact
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.92rem' }}>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.8rem' }}>Customer Support Email:</span>
                  <a href="mailto:support@bitzers.top" style={{ color: 'var(--accent-secondary-light)', fontWeight: 600, textDecoration: 'none' }}>
                    support@bitzers.top
                  </a>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.8rem' }}>Privacy & Data Officer:</span>
                  <a href="mailto:support@bitzers.top" style={{ color: 'var(--accent-primary-light)', fontWeight: 600, textDecoration: 'none' }}>
                    support@bitzers.top
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', marginTop: '6px' }}>
                  <Clock size={16} color="#34d399" />
                  <span>Average Response Time: <strong>24 Hours</strong></span>
                </div>
              </div>
            </div>

            {/* Common FAQ */}
            <div className="glass-card" style={{ padding: '30px' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '18px' }}>
                Common Troubleshooting
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '4px' }}>
                    How do I restore my in-app purchases?
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                    Inside the app, navigate to <em>Settings &rarr; Upgrade / Store &rarr; Restore Purchases</em>. Ensure you are signed in with the same Google account used during purchase.
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '4px' }}>
                    Where do I report a security vulnerability?
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                    Please send vulnerability reports with reproduction steps directly to <a href="mailto:support@bitzers.top" style={{ color: 'var(--accent-secondary-light)' }}>support@bitzers.top</a>.
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '4px' }}>
                    Looking to delete your data?
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                    Visit our <Link href="/data-deletion" style={{ color: 'var(--accent-secondary-light)' }}>Data Deletion Portal</Link> to submit an automated request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
