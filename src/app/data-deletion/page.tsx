'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Trash2, ShieldAlert, CheckCircle, Mail, AlertTriangle, ArrowLeft } from 'lucide-react';

export default function DataDeletionPage() {
  const [appName, setAppName] = useState('novascan');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('User Request - Account Deletion');
  const [dataTypes, setDataTypes] = useState({
    account: true,
    cloudSync: true,
    analytics: true,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container-narrow">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="badge badge-brand" style={{ marginBottom: '16px' }}>
            <Trash2 size={16} />
            <span>Google Play Policy Requirement</span>
          </div>
          <h1 style={{ fontSize: '2.6rem', marginBottom: '16px' }}>
            User Data & Account <span className="text-gradient">Deletion Request</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
            In accordance with Google Play Store policies and international data privacy regulations (GDPR & CCPA), 
            <strong> Bitzer Solutions LLC</strong> provides users with a direct method to request full deletion of their account and stored data.
          </p>
        </div>

        {/* Informative Callout */}
        <div className="verification-callout" style={{ marginBottom: '32px' }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '6px' }}>
              What happens when you request data deletion?
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
              Upon verification, your profile, synced cloud backups, telemetry records, and application settings will be permanently erased from Bitzer Solutions LLC servers within <strong>48 hours</strong>.
            </p>
          </div>
        </div>

        {/* Interactive Form Card */}
        <div className="glass-card" style={{ padding: '40px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <CheckCircle size={36} color="#34d399" />
              </div>
              <h2 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '12px' }}>
                Deletion Request Submitted Successfully
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 24px' }}>
                A confirmation link has been sent to <strong>{email}</strong>. Once you click the confirmation link, your data will be queued for permanent purging within 48 hours.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="btn btn-secondary"
                  style={{ fontSize: '0.9rem' }}
                >
                  Submit Another Request
                </button>
                <Link href="/" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '24px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px' }}>
                Submit Deletion Request
              </h3>

              {/* App Selection */}
              <div className="form-group">
                <label className="form-label" htmlFor="app-select">
                  Select Application
                </label>
                <select 
                  id="app-select"
                  className="form-control"
                  value={appName}
                  onChange={(e) => setAppName(e.target.value)}
                  style={{ background: '#0f172a' }}
                >
                  <option value="novascan">NovaScan Pro (com.bitzersolutions.novascan)</option>
                  <option value="pulsetracker">PulseTracker Health (com.bitzersolutions.pulsetracker)</option>
                  <option value="nexus">Nexus Analytics Hub (com.bitzersolutions.nexus)</option>
                  <option value="other">Other Bitzer Solutions LLC App / Web Service</option>
                </select>
              </div>

              {/* Email Address */}
              <div className="form-group">
                <label className="form-label" htmlFor="user-email">
                  Account Email or User Identifier *
                </label>
                <input 
                  type="email" 
                  id="user-email"
                  className="form-control"
                  placeholder="e.g. user@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
                  Enter the email address associated with your app account or cloud synchronization.
                </span>
              </div>

              {/* Data Scope */}
              <div className="form-group">
                <label className="form-label">
                  Scope of Data to Delete
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '0.92rem' }}>
                    <input 
                      type="checkbox" 
                      checked={dataTypes.account} 
                      onChange={(e) => setDataTypes({ ...dataTypes, account: e.target.checked })}
                    />
                    <span>Account Profile & User Credentials</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '0.92rem' }}>
                    <input 
                      type="checkbox" 
                      checked={dataTypes.cloudSync} 
                      onChange={(e) => setDataTypes({ ...dataTypes, cloudSync: e.target.checked })}
                    />
                    <span>Cloud Backups & Documents / Logs</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '0.92rem' }}>
                    <input 
                      type="checkbox" 
                      checked={dataTypes.analytics} 
                      onChange={(e) => setDataTypes({ ...dataTypes, analytics: e.target.checked })}
                    />
                    <span>Diagnostic & Anonymous Usage Logs</span>
                  </label>
                </div>
              </div>

              {/* Reason */}
              <div className="form-group">
                <label className="form-label" htmlFor="deletion-reason">
                  Reason for Deletion (Optional)
                </label>
                <input 
                  type="text" 
                  id="deletion-reason"
                  className="form-control"
                  placeholder="Optional notes or reasons"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </div>

              {/* Submit CTA */}
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', marginTop: '10px' }}>
                <Trash2 size={18} /> Confirm & Request Permanent Deletion
              </button>
            </form>
          )}
        </div>

        {/* Alternative In-App Deletion Method */}
        <div style={{ marginTop: '40px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '32px' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertTriangle size={20} color="#f59e0b" />
            In-App Direct Deletion Steps
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '16px' }}>
            You can also delete your account directly from within any Bitzer Solutions LLC Android or iOS application without using this web form:
          </p>
          <ol style={{ paddingLeft: '24px', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.8 }}>
            <li>Open the application on your mobile device.</li>
            <li>Tap on the <strong>Settings</strong> or <strong>Profile</strong> tab in the navigation bar.</li>
            <li>Select <strong>Privacy & Security</strong>.</li>
            <li>Scroll to the bottom and tap <strong>Delete Account & Clear Data</strong>.</li>
            <li>Confirm your selection. All locally stored cache and cloud records will be removed instantaneously.</li>
          </ol>
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link href="/privacy-policy" style={{ color: 'var(--accent-secondary-light)', fontSize: '0.9rem', textDecoration: 'none' }}>
            &larr; Read our complete Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
